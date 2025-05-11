import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // This allows production builds to succeed even if ESLint errors are present
    ignoreDuringBuilds: true,
  },
  // You can add other config options below as needed
};

export default nextConfig;
