import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /**
   * Enable static exports for GitHub Pages
   */
  output: "export",
  distDir: ".next",

  /**
   * Configure base path and asset prefix for GitHub Pages
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
