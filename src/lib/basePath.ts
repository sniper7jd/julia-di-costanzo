/** Must match `basePath` / `assetPrefix` in next.config.ts */
export const BASE_PATH = "/julia-di-costanzo";

/** Prefix a root-absolute public asset path for GitHub Pages. */
export function withBasePath(path: string): string {
  if (
    !path.startsWith("/") ||
    path.startsWith("//") ||
    path.startsWith(BASE_PATH + "/") ||
    path === BASE_PATH
  ) {
    return path;
  }
  return `${BASE_PATH}${path}`;
}
