"use client";

import { FC, useState, useEffect, useRef, useCallback } from 'react';

interface Ripple {
  id: number;
  x: number;
  y: number;
  size: number;
}

const RippleEffect: FC = () => {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idCounterRef = useRef(0);
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = useRef(false);
  
  const createRipple = useCallback((x: number, y: number) => {
    // Skip effect if user prefers reduced motion
    if (prefersReducedMotion.current) return;
    
    idCounterRef.current += 1;
    const newRipple = {
      id: Date.now() * 1000 + idCounterRef.current,
      x,
      y,
      size: 100 // Size of the ripple in pixels
    };
    
    setRipples(prev => [...prev, newRipple]);
    
    // Remove ripple after animation completes
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600); // Should match the animation duration
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
    
    // Mouse click handler
    const handleClick = (e: MouseEvent) => {
      createRipple(e.clientX, e.clientY);
    };
    
    // Touch handler for mobile devices
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        createRipple(touch.clientX, touch.clientY);
      }
    };
    
    // Add event listeners for both mouse and touch
    document.addEventListener('click', handleClick, { capture: true });
    document.addEventListener('touchstart', handleTouch, { capture: true, passive: true });
    
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
      document.removeEventListener('touchstart', handleTouch, { capture: true });
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, [createRipple]);
  
  // Only render on the client side
  if (!isMounted) return null;
  
  return (
    <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 9999 }}>
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="click-ripple absolute pointer-events-none"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`,
            width: `${ripple.size}px`,
            height: `${ripple.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default RippleEffect; 