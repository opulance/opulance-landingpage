"use client";

import { FC, useState, useEffect, useRef } from 'react';

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
  
  useEffect(() => {
    setIsMounted(true);
    
    const handleClick = (e: MouseEvent) => {
      idCounterRef.current += 1;
      const newRipple = {
        id: Date.now() * 1000 + idCounterRef.current,
        x: e.clientX,
        y: e.clientY,
        size: 100 // Size of the ripple in pixels
      };
      
      setRipples(prev => [...prev, newRipple]);
      
      // Remove ripple after animation completes
      setTimeout(() => {
        setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
      }, 600); // Should match the animation duration
    };
    
    // Add event listener to document to capture all clicks
    document.addEventListener('click', handleClick, { capture: true });
    
    return () => {
      document.removeEventListener('click', handleClick, { capture: true });
    };
  }, []);
  
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