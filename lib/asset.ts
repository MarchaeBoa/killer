/**
 * Prefix a public asset path with the configured basePath so it resolves both
 * at the site root (local dev) and under the project sub-path on GitHub Pages
 * (e.g. /killer/images/foo.jpg). Raw <img src> strings are NOT auto-prefixed by
 * Next.js the way next/link / next/image are, so we do it explicitly.
 */
export function assetPath(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) return `${base}/${path}`;
  return `${base}${path}`;
}
