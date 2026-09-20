import type { NextConfig } from "next";

// GitHub Pages serves project sites under /<repo>. Set PAGES_BASE_PATH
// to that subpath at build time (the deploy workflow does this).
// Leave it empty for a custom domain or a user site served from /.
const basePath = process.env.PAGES_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (no Node server there).
  output: "export",
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  // next/image optimization needs a server, so serve images as is.
  images: { unoptimized: true },
};

export default nextConfig;
