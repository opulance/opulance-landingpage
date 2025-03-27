"use client";

import { useEffect, useState, useRef, useCallback } from 'react';

const MouseTrail = () => {
  const [dots, setDots] = useState<Array<{id: number, x: number, y: number, opacity: number}>>([]);
  const idCounterRef = useRef(0);
  const [isMounted, setIsMounted] = useState(false);
  const lastDotRef = useRef<{x: number, y: number} | null>(null);
  const prefersReducedMotion = useRef(false);
  
  // Memoize the update function to avoid recreating it on each render
  const updateMousePosition = useCallback((e: MouseEvent) => {
    // Skip effect if user prefers reduced motion
    if (prefersReducedMotion.current) return;
    
    // Only create a dot every few pixels moved to reduce performance impact
    const lastDot = lastDotRef.current;
    const shouldCreateDot = !lastDot || 
      Math.abs(e.clientX - lastDot.x) > 15 || 
      Math.abs(e.clientY - lastDot.y) > 15;
      
    if (!shouldCreateDot) return;
    
    // Update the last dot reference
    lastDotRef.current = { x: e.clientX, y: e.clientY };
    
    // Add new dot with a unique ID (timestamp + counter)
    setDots(prev => {
      idCounterRef.current += 1;
      const newDots = [...prev, { 
        id: Date.now() * 1000 + idCounterRef.current, 
        x: e.clientX, 
        y: e.clientY,
        opacity: 1
      }];
      
      // Keep only the latest 8 dots
      if (newDots.length > 8) {
        return newDots.slice(newDots.length - 8);
      }
      return newDots;
    });
  }, []);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Check if user prefers reduced motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    prefersReducedMotion.current = mediaQuery.matches;
    
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      prefersReducedMotion.current = e.matches;
    };
    
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    
    // Fade out dots
    const fadeDots = setInterval(() => {
      setDots(prev => prev.map(dot => ({
        ...dot,
        opacity: dot.opacity > 0 ? dot.opacity - 0.1 : 0
      })).filter(dot => dot.opacity > 0));
    }, 50);
    
    // Use capture phase to ensure we get all mouse movements
    document.addEventListener('mousemove', updateMousePosition, { capture: true });
    
    return () => {
      document.removeEventListener('mousemove', updateMousePosition, { capture: true });
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
      clearInterval(fadeDots);
    };
  }, [updateMousePosition]);
  
  // Only render on the client side
  if (!isMounted) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9998 }}>
      {dots.map(dot => (
        <div
          key={dot.id}
          className="cursor-dot absolute"
          style={{
            left: dot.x,
            top: dot.y,
            width: '30px',
            height: '30px',
            opacity: dot.opacity
          }}
        />
      ))}
    </div>
  );
};

export default MouseTrail; 