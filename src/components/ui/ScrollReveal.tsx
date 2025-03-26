"use client";

import { FC, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  once?: boolean;
}

const ScrollReveal: FC<ScrollRevealProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  threshold = 0.1,
  className = '',
  once = true
}) => {
  // Set initial animation values based on direction
  let initial = {};
  
  switch (direction) {
    case 'up':
      initial = { opacity: 0, y: 50 };
      break;
    case 'down':
      initial = { opacity: 0, y: -50 };
      break;
    case 'left':
      initial = { opacity: 0, x: 50 };
      break;
    case 'right':
      initial = { opacity: 0, x: -50 };
      break;
    case 'none':
      initial = { opacity: 0 };
      break;
    default:
      initial = { opacity: 0, y: 50 };
  }

  return (
    <motion.div
      initial={initial}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: threshold }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal; 