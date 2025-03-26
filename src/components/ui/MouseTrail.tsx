"use client";

import { useEffect, useState, useRef } from 'react';

const MouseTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [dots, setDots] = useState<Array<{id: number, x: number, y: number, opacity: number}>>([]);
  const idCounterRef = useRef(0);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Only create a dot every few pixels moved to reduce performance impact
      const lastDot = dots[dots.length - 1];
      const shouldCreateDot = !lastDot || 
        Math.abs(e.clientX - lastDot.x) > 15 || 
        Math.abs(e.clientY - lastDot.y) > 15;
        
      if (!shouldCreateDot) return;
      
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
    };
    
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
      clearInterval(fadeDots);
    };
  }, [dots]);
  
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