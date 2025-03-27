import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for GitHub Pages
   */
  output: "export",

  /**
   * Configure base path for GitHub Pages
   * This should match your repository name
   */
  basePath: "/opulance-landingpage",
  trailingSlash: true,

  /**
   * Configure image optimization
   */
  images: {
    unoptimized: true
  },

  /**
   * Disable ESLint during production builds
   */
  eslint: {
    ignoreDuringBuilds: true
  },
  
  /**
   * Remove experimental config causing warnings
   */
  experimental: {}
};

export default nextConfig;
