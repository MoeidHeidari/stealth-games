const basePath = process.env.PAGES_BASE_PATH ?? "";

/**
 * Prefix a public folder path (e.g. "/games/cover.png") with the deploy
 * subpath, so images resolve both in local dev (no subpath) and on
 * GitHub Pages project sites (e.g. "/stealth-games").
 */
export function withBasePath(path: string): string {
  if (!path.startsWith("/") || basePath === "") return path;
  return `${basePath}${path}`;
}
