/**
 * Prefixes a path to a file in `public/` with the deploy base path.
 *
 * On GitHub Pages the site is served from a sub-path
 * (https://<owner>.github.io/<repo>/), so static assets referenced with a
 * leading-slash URL must be prefixed with NEXT_PUBLIC_BASE_PATH. In normal
 * `next dev` / `next build` the base path is empty and this is a no-op.
 */
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

export default asset;
