/**
 * When GITHUB_PAGES=true the site is built as a fully static export
 * (out/) suitable for GitHub Pages. basePath/assetPrefix are set so assets
 * resolve under the project-pages sub-path (https://<owner>.github.io/<repo>/).
 * Normal `next dev` / `next build` are unaffected.
 */
const isPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "**.pexels.com",
      },
    ],
  },
  ...(isPages
    ? {
        output: "export",
        basePath,
        assetPrefix: basePath ? `${basePath}/` : undefined,
        images: { unoptimized: true },
        trailingSlash: true,
      }
    : {}),
};

export default nextConfig;
