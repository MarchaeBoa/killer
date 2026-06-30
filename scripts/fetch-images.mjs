#!/usr/bin/env node
/**
 * Fetch real, commercially-licensed product photos from the Pexels API and save
 * them locally to public/images/ (no hotlinking — the page works offline after).
 *
 * Usage:
 *   PEXELS_API_KEY=xxxxx npm run fetch-images          # download missing images
 *   PEXELS_API_KEY=xxxxx npm run fetch-images -- --force   # re-download everything
 *
 * Get a free key at https://www.pexels.com/api/. Slots are defined in
 * public/images/manifest.json. A CREDITS.md is written with photographer
 * attribution (Pexels licence: free for commercial use, attribution appreciated).
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const IMAGES_DIR = join(ROOT, "public", "images");
const MANIFEST = join(IMAGES_DIR, "manifest.json");

const API_KEY = process.env.PEXELS_API_KEY;
const FORCE = process.argv.includes("--force");

function fail(msg) {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

if (!API_KEY) {
  fail(
    "PEXELS_API_KEY is not set.\n" +
      "  1. Create a free key at https://www.pexels.com/api/\n" +
      "  2. Run:  PEXELS_API_KEY=your_key npm run fetch-images",
  );
}

async function searchPhoto(query, orientation) {
  const url =
    `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}` +
    `&per_page=5&orientation=${orientation}&size=medium`;
  const res = await fetch(url, { headers: { Authorization: API_KEY } });
  if (res.status === 401) fail("Pexels rejected the API key (401 Unauthorized).");
  if (res.status === 429) fail("Pexels rate limit hit (429). Wait an hour or upgrade the key.");
  if (!res.ok) throw new Error(`Pexels search failed (${res.status}) for "${query}"`);
  const data = await res.json();
  return data.photos?.[0] ?? null;
}

async function download(url, dest) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`download failed (${res.status}) ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  await writeFile(dest, buf);
  return buf.length;
}

async function main() {
  await mkdir(IMAGES_DIR, { recursive: true });
  const { images } = JSON.parse(await readFile(MANIFEST, "utf8"));

  const credits = [];
  const weak = [];
  let downloaded = 0;
  let skipped = 0;

  for (const { file, query, orientation } of images) {
    const dest = join(IMAGES_DIR, file);
    if (!FORCE && existsSync(dest)) {
      console.log(`• skip   ${file} (already exists)`);
      skipped++;
      continue;
    }

    try {
      const photo = await searchPhoto(query, orientation);
      if (!photo) {
        console.warn(`! no result for "${query}" → ${file}`);
        weak.push({ file, query });
        continue;
      }
      const srcUrl = orientation === "landscape" ? photo.src.landscape : photo.src.large;
      const bytes = await download(srcUrl, dest);
      console.log(`✓ saved  ${file}  (${Math.round(bytes / 1024)} KB) — by ${photo.photographer}`);
      credits.push(
        `- **${file}** — Photo by [${photo.photographer}](${photo.photographer_url}) on [Pexels](${photo.url})`,
      );
      downloaded++;
    } catch (err) {
      console.warn(`! ${file}: ${err.message}`);
      weak.push({ file, query });
    }
  }

  if (credits.length) {
    const md =
      "# Image credits\n\n" +
      "All photos are from [Pexels](https://www.pexels.com) (free for commercial use).\n\n" +
      credits.join("\n") +
      "\n";
    await writeFile(join(IMAGES_DIR, "CREDITS.md"), md);
  }

  console.log(`\nDone. ${downloaded} downloaded, ${skipped} skipped.`);
  if (weak.length) {
    console.log("\nWeak / failed slots — tweak the query in public/images/manifest.json:");
    for (const w of weak) console.log(`  - ${w.file}  ("${w.query}")`);
  }
}

main().catch((e) => fail(e.message));
