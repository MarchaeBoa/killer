#!/usr/bin/env node
/**
 * Fetch real, commercially-licensed product photos and save them locally to
 * public/images/ (no hotlinking — the page works offline after).
 *
 * Works with EITHER Unsplash or Pexels — whichever key you provide:
 *
 *   UNSPLASH_ACCESS_KEY=xxxxx npm run fetch-images          # download missing
 *   PEXELS_API_KEY=xxxxx      npm run fetch-images
 *   ...add `-- --force` to re-download everything.
 *
 * Free keys:
 *   Unsplash → https://unsplash.com/developers  (use the "Access Key")
 *   Pexels   → https://www.pexels.com/api/
 *
 * NOTE: this must run from a machine/network that can reach the image API.
 * Locked-down CI or cloud sandboxes often block api.unsplash.com — run it
 * locally, then commit the downloaded files in public/images/.
 *
 * Slots are defined in public/images/manifest.json. Components reference
 * /images/<file>. A CREDITS.md is written with photographer attribution.
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const IMAGES_DIR = join(ROOT, "public", "images");
const MANIFEST = join(IMAGES_DIR, "manifest.json");

const UNSPLASH_KEY = process.env.UNSPLASH_ACCESS_KEY;
const PEXELS_KEY = process.env.PEXELS_API_KEY;
const FORCE = process.argv.includes("--force");

function fail(msg) {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
}

/** Unsplash: search photos + build a downloadable, correctly-sized URL. */
function unsplash(key) {
  // manifest orientations → Unsplash's vocabulary ("square" isn't valid there)
  const orient = (o) => (o === "landscape" ? "landscape" : "squarish");
  return {
    name: "Unsplash",
    async search(query, orientation) {
      const url =
        `https://api.unsplash.com/search/photos?query=${encodeURIComponent(query)}` +
        `&per_page=5&content_filter=high&orientation=${orient(orientation)}`;
      const res = await fetch(url, {
        headers: { Authorization: `Client-ID ${key}`, "Accept-Version": "v1" },
      });
      if (res.status === 401) fail("Unsplash rejected the Access Key (401 Unauthorized).");
      if (res.status === 403)
        fail("Unsplash rate limit hit (403). Demo apps allow 50 requests/hour.");
      if (!res.ok) throw new Error(`Unsplash search failed (${res.status}) for "${query}"`);
      const data = await res.json();
      const photo = data.results?.[0];
      if (!photo) return null;
      // Derive a sized JPG off the raw URL so square vs landscape both crop well.
      const [w, h] = orientation === "landscape" ? [1200, 630] : [800, 800];
      const src = `${photo.urls.raw}&w=${w}&h=${h}&fit=crop&crop=entropy&q=80&fm=jpg`;
      return {
        src,
        author: photo.user?.name ?? "Unknown",
        authorUrl: photo.user?.links?.html ?? "https://unsplash.com",
        pageUrl: photo.links?.html ?? "https://unsplash.com",
      };
    },
  };
}

/** Pexels: search photos + pick a downloadable URL. */
function pexels(key) {
  return {
    name: "Pexels",
    async search(query, orientation) {
      const url =
        `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}` +
        `&per_page=5&orientation=${orientation === "landscape" ? "landscape" : "square"}&size=medium`;
      const res = await fetch(url, { headers: { Authorization: key } });
      if (res.status === 401) fail("Pexels rejected the API key (401 Unauthorized).");
      if (res.status === 429) fail("Pexels rate limit hit (429). Wait an hour or upgrade the key.");
      if (!res.ok) throw new Error(`Pexels search failed (${res.status}) for "${query}"`);
      const data = await res.json();
      const photo = data.photos?.[0];
      if (!photo) return null;
      return {
        src: orientation === "landscape" ? photo.src.landscape : photo.src.large,
        author: photo.photographer,
        authorUrl: photo.photographer_url,
        pageUrl: photo.url,
      };
    },
  };
}

// Pick a provider from whichever key is present (Unsplash wins if both set).
const provider = UNSPLASH_KEY
  ? unsplash(UNSPLASH_KEY)
  : PEXELS_KEY
    ? pexels(PEXELS_KEY)
    : null;

if (!provider) {
  fail(
    "No image API key set. Provide one of:\n" +
      "  • Unsplash:  UNSPLASH_ACCESS_KEY=your_key npm run fetch-images\n" +
      "               (free key at https://unsplash.com/developers — use the Access Key)\n" +
      "  • Pexels:    PEXELS_API_KEY=your_key npm run fetch-images\n" +
      "               (free key at https://www.pexels.com/api/)",
  );
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

  console.log(`Using ${provider.name}.\n`);

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
      const hit = await provider.search(query, orientation);
      if (!hit) {
        console.warn(`! no result for "${query}" → ${file}`);
        weak.push({ file, query });
        continue;
      }
      const bytes = await download(hit.src, dest);
      console.log(`✓ saved  ${file}  (${Math.round(bytes / 1024)} KB) — by ${hit.author}`);
      credits.push(
        `- **${file}** — Photo by [${hit.author}](${hit.authorUrl}) on [${provider.name}](${hit.pageUrl})`,
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
      `Photos fetched from ${provider.name} (free for commercial use).\n\n` +
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
