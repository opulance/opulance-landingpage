import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for GitHub Pages
   */
  output: "export",
  distDir: "out",

  /**
   * Configure base path for GitHub Pages
   * This should match your repository name
   */
  basePath: "/opulance-landingpage",
  trailingSlash: true,

  /**
   * Disable ESLint during production build
   */
  eslint: {
    ignoreDuringBuilds: true
  }
};

export default nextConfig;
