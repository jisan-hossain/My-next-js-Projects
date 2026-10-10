
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrerendering: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.magnific.com",
      },
    ],
  },
};

export default nextConfig;