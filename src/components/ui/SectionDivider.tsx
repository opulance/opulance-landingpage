"use client";

import { FC, useState, useEffect } from 'react';

interface SectionDividerProps {
  direction: 'up' | 'down';
}

const SectionDivider: FC<SectionDividerProps> = ({ direction }) => {
  const [isMounted, setIsMounted] = useState(false);
  const [elements, setElements] = useState<Array<{width: string, height: string, left: string, opacity: number}>>([]);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Generate random elements only on client side
    const generatedElements = Array.from({ length: 5 }).map((_, index) => ({
      width: `${Math.random() * 20 + 10}%`,
      height: `${Math.random() * 60 + 40}%`,
      left: `${(index * 25) - 10 + (Math.random() * 20)}%`,
      opacity: Math.random() * 0.5 + 0.2
    }));
    
    setElements(generatedElements);
  }, []);
  
  // Render nothing on server
  if (!isMounted) return null;
  
  return (
    <div className={`section-divider section-divider--${direction}`}>
      <div className="absolute inset-0 opacity-30">
        {elements.map((element, index) => (
          <div
            key={index}
            className="absolute bg-teal-400/10 rounded-full blur-2xl"
            style={{
              width: element.width,
              height: element.height,
              left: element.left,
              top: direction === 'up' ? 'auto' : '0',
              bottom: direction === 'up' ? '0' : 'auto',
              opacity: element.opacity
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionDivider; 