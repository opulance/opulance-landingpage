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
  basePath: "",
  trailingSlash: true,

  /**
   * Configure image optimization for static export
   */
  images: {
    loader: 'custom',
    loaderFile: './image-loader.ts',
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
