import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class values using clsx and merges them with tailwind-merge
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Gets the base path for assets based on the current environment
 * Returns an empty string for local development or the appropriate basePath for GitHub Pages
 */
export function getBasePath(): string {
  // Check if we're running in development mode on the client
  if (typeof window !== 'undefined') {
    // In development mode, we don't use a basePath
    if (process.env.NODE_ENV === 'development') {
      return '';
    }
    
    // In production, use the GitHub Pages path
    return '/opulance-landingpage';
  }
  
  // Default to empty on server-side
  return '';
}

/**
 * Gets the full path for an asset, including the basePath if necessary
 * @param path The relative path to the asset (e.g., "/images/example.jpg")
 * @returns The full path including basePath if needed
 */
export function getAssetPath(path: string): string {
  const basePath = getBasePath();
  
  // If there's no basePath, return the path as is
  if (!basePath) return path;
  
  // If path already has the basePath, don't add it again
  if (path.startsWith(basePath)) {
    return path;
  }
  
  // Otherwise, add the basePath to the path
  return `${basePath}${path}`;
}

/**
 * Gets the correct href path for navigation links
 * - Handles full paths by adding basePath
 * - Preserves hash links and anchor links as is
 * 
 * @param href The original href path
 * @returns Correctly formatted href path
 */
export function getLinkPath(href: string): string {
  // If it's an anchor link or external link, return as is
  if (href.startsWith('#') || href.startsWith('http')) {
    return href;
  }
  
  const basePath = getBasePath();
  
  // If there's no basePath, return the original path
  if (!basePath) return href;
  
  // Fix for the root path
  if (href === '/') {
    return basePath;
  }
  
  // If the href already includes the basePath, don't add it again
  if (href.startsWith(basePath)) {
    return href;
  }
  
  // Otherwise, add the basePath to the href
  return `${basePath}${href}`;
}
