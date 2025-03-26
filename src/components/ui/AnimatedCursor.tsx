"use client"

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface CursorProps {
  color?: string;
}

const AnimatedCursor: React.FC<CursorProps> = ({ color = "#14b8a6" }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailPositions, setTrailPositions] = useState<Array<{ x: number, y: number }>>([]);
  const [isPointer, setIsPointer] = useState(false);
  
  useEffect(() => {
    const addTrailPosition = (x: number, y: number) => {
      setTrailPositions(prev => {
        const newPositions = [...prev, { x, y }];
        if (newPositions.length > 5) {
          return newPositions.slice(newPositions.length - 5);
        }
        return newPositions;
      });
    };
    
    const updatePosition = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
      addTrailPosition(clientX, clientY);
      
      // Check if cursor is over a clickable element
      const target = e.target as HTMLElement;
      const isClickable = 
        target.tagName === 'BUTTON' || 
        target.tagName === 'A' || 
        target.closest('a') !== null || 
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer';
      
      setIsPointer(isClickable);
    };
    
    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);
  
  return (
    <>
      {/* Trail dots */}
      {trailPositions.map((pos, i) => (
        <motion.div
          key={i}
          className="fixed rounded-full pointer-events-none z-50"
          style={{
            left: pos.x,
            top: pos.y,
            translateX: "-50%",
            translateY: "-50%",
            backgroundColor: color,
            opacity: 0.2 - (i * 0.03),
            width: 8 - (i * 1),
            height: 8 - (i * 1),
          }}
          transition={{ duration: 0.1 }}
        />
      ))}
      
      {/* Main cursor */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-50"
        animate={{
          x: position.x,
          y: position.y,
          scale: isPointer ? 1.5 : 1,
          opacity: 1,
        }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 300,
          mass: 0.5
        }}
        style={{
          left: 0,
          top: 0,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? 24 : 16,
          height: isPointer ? 24 : 16,
          border: `2px solid ${color}`,
          backgroundColor: isPointer ? `${color}20` : "transparent"
        }}
      />
      
      {/* Inner dot */}
      <motion.div
        className="fixed rounded-full pointer-events-none z-50"
        animate={{
          x: position.x,
          y: position.y,
          scale: isPointer ? 0 : 1,
        }}
        transition={{ 
          type: "spring", 
          damping: 20, 
          stiffness: 400,
          mass: 0.4
        }}
        style={{
          left: 0,
          top: 0,
          translateX: "-50%",
          translateY: "-50%",
          width: 4,
          height: 4,
          backgroundColor: color,
        }}
      />
    </>
  );
};

export default AnimatedCursor; 