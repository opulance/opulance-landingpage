"use client";

import { FC, useState, useEffect } from 'react';

interface FloatingElementsProps {
  count?: number;
  color?: string;
  variant?: 'dots' | 'circles' | 'squares' | 'mixed';
  maxSize?: number;
  minSize?: number;
  zIndex?: number;
}

interface ElementData {
  id: number;
  shape: string;
  size: number;
  left: string;
  top: string;
  delay: number;
  opacity: number;
}

const FloatingElements: FC<FloatingElementsProps> = ({
  count = 6,
  color = "#14b8a6",
  variant = 'mixed',
  maxSize = 15,
  minSize = 5,
  zIndex = 0
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [elements, setElements] = useState<ElementData[]>([]);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Generate random elements only on client side
    const shapes: Array<'circle' | 'square' | 'triangle'> = ['circle', 'square', 'triangle'];
    const generatedElements = Array.from({ length: count }).map((_, index) => {
      const size = Math.random() * (maxSize - minSize) + minSize;
      const delay = index % 3; // 0, 1, or 2
      
      let shape = '';
      if (variant === 'mixed') {
        shape = shapes[Math.floor(Math.random() * shapes.length)];
      } else if (variant === 'dots' || variant === 'circles') {
        shape = 'circle';
      } else {
        shape = 'square';
      }
      
      const opacity = Math.random() * 0.5 + 0.1;
      
      return {
        id: index,
        shape,
        size,
        left: `${Math.random() * 90 + 5}%`,
        top: `${Math.random() * 90 + 5}%`,
        delay,
        opacity
      };
    });
    
    setElements(generatedElements);
  }, [count, variant, maxSize, minSize]);
  
  // Render nothing on server
  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex }}>
      {elements.map((element) => (
        <div
          key={element.id}
          className={`absolute ${
            element.delay === 0 
              ? 'animate-float' 
              : element.delay === 1 
                ? 'animate-float-delay-1' 
                : 'animate-float-delay-2'
          }`}
          style={{
            left: element.left,
            top: element.top,
            opacity: element.opacity,
          }}
        >
          {element.shape === 'circle' && (
            <div 
              className="rounded-full backdrop-blur-lg"
              style={{ 
                width: `${element.size}px`, 
                height: `${element.size}px`, 
                background: `${color}${Math.floor(element.opacity * 255).toString(16).padStart(2, '0')}`,
                border: `1px solid ${color}40`
              }}
            />
          )}
          
          {element.shape === 'square' && (
            <div 
              className="backdrop-blur-lg rotate-45"
              style={{ 
                width: `${element.size}px`, 
                height: `${element.size}px`, 
                background: `${color}${Math.floor(element.opacity * 255).toString(16).padStart(2, '0')}`,
                border: `1px solid ${color}40`
              }}
            />
          )}
          
          {element.shape === 'triangle' && (
            <div 
              className="backdrop-blur-lg"
              style={{ 
                width: 0,
                height: 0,
                borderLeft: `${element.size / 2}px solid transparent`,
                borderRight: `${element.size / 2}px solid transparent`,
                borderBottom: `${element.size}px solid ${color}${Math.floor(element.opacity * 255).toString(16).padStart(2, '0')}`,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FloatingElements; 