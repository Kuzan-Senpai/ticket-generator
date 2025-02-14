import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true
  },

  eslint: {
    ignoreDuringBuilds: true
  },

  images: {
    domains: ["res.cloudinary.com"], // ✅ Allow Cloudinary images
  },
};

export default nextConfig;
