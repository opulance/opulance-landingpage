import type { NextConfig } from "next";

// Check if we're in development mode
const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  /**
   * Enable static exports for GitHub Pages
   * Only for production builds
   */
  output: isDev ? undefined : "export",

  /**
   * Configure base path for GitHub Pages
   * This should match your repository name
   * Only apply in production
   */
  basePath: isDev ? "" : "/opulance-landingpage",
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
   * Clean experimental config
   */
  experimental: {}
};

export default nextConfig;
