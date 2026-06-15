import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Emit a self-contained production server at .next/standalone (server.js + only the traced
  // node_modules) for a small Docker image. Static assets (.next/static) and public/ are NOT
  // included by standalone — the Dockerfile copies them in. No effect on `next dev`.
  output: "standalone",
};

export default nextConfig;
