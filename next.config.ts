import type { NextConfig } from "next";

/** Keep in sync with `BASE_PATH` in src/lib/basePath.ts */
const repo = "julia-di-costanzo";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: `/${repo}`,
  assetPrefix: `/${repo}`,
  trailingSlash: true,
};

export default nextConfig;
