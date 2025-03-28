/**
 * Utility to detect WebGL compatibility
 */

// Add device memory to Navigator interface
declare global {
  interface Navigator {
    deviceMemory?: number;
  }
}

export const isWebGLAvailable = (): boolean => {
  try {
    // Create a canvas element
    const canvas = document.createElement('canvas');
    
    // Try to get WebGL2 context first (modern browsers)
    const gl2 = canvas.getContext('webgl2');
    if (gl2) return true;
    
    // Fall back to WebGL1
    const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
    return !!gl;
  } catch (e) {
    console.warn('WebGL detection failed:', e);
    return false;
  }
};

/**
 * Determine the rendering tier based on device capabilities
 * - tier3: High-end devices, full effects
 * - tier2: Mid-range devices, limited effects
 * - tier1: Low-end devices, minimal effects
 */
export const determineRenderingTier = (): 'tier1' | 'tier2' | 'tier3' => {
  // Check for WebGL support first
  if (typeof window === 'undefined') return 'tier2'; // Default for SSR
  
  if (!isWebGLAvailable()) return 'tier1';
  
  // Basic performance estimation
  const hasReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  
  if (hasReducedMotion) return 'tier1';
  
  // Check device memory if available
  if (navigator.deviceMemory) {
    if (navigator.deviceMemory < 4) return 'tier1';
    if (navigator.deviceMemory < 8) return 'tier2';
    return 'tier3';
  }
  
  // Check hardware concurrency (CPU cores)
  if (navigator.hardwareConcurrency) {
    if (navigator.hardwareConcurrency < 4) return 'tier1';
    if (navigator.hardwareConcurrency < 8) return 'tier2';
    return 'tier3';
  }
  
  // Default to middle tier if we can't determine
  return 'tier2';
}; 