import type { NextConfig } from "next";

/**
 * Static export configuration for Cloudflare Pages (free plan).
 *
 * Cloudflare Pages serves the static `out/` directory directly: no Node.js
 * server, no Pages Functions, no server-side rendering at request time.
 * That keeps the deployment inside the free tier (unlimited requests and
 * bandwidth for static assets).
 */
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    // The Next.js image optimizer needs a server; static export cannot use it.
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
