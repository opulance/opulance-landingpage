import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for GitHub Pages
   */
  output: "export",

  /**
   * Configure image optimization for static export
   */
  images: {
    unoptimized: true
  },

  /**
   * Disable ESLint during production build
   * since we're deploying to GitHub Pages
   */
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
