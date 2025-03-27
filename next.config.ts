import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for GitHub Pages
   */
  output: "export",

  /**
   * Disable server-based image optimization since GitHub Pages
   * only supports static files
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
