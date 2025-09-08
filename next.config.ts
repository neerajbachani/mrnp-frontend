import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Accept images from any source
      },
      {
        protocol: "http",
        hostname: "**", // Accept images from any HTTP source (if needed)
      },
    ],
  },
};

export default nextConfig;
