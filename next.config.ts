import type { NextConfig } from "next";

/** Keep in sync with `BASE_PATH` in src/lib/basePath.ts */
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "",
  assetPrefix: "",
  trailingSlash: true,
};

export default nextConfig;
