"use client";

import { FC, ReactNode, MouseEvent } from 'react';
import { motion } from 'framer-motion';

interface AccentBoxProps {
  children: ReactNode;
  className?: string;
  animate?: boolean;
  hoverEffect?: 'glow' | 'scale' | 'border' | 'none';
  borderStyle?: 'solid' | 'gradient' | 'none';
  onMouseEnter?: (e: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave?: (e: MouseEvent<HTMLDivElement>) => void;
}

const AccentBox: FC<AccentBoxProps> = ({
  children,
  className = '',
  animate = false,
  hoverEffect = 'glow',
  borderStyle = 'solid',
  onMouseEnter,
  onMouseLeave
}) => {
  // Base classes
  let classes = 'bg-gray-900/70 backdrop-blur-sm rounded-xl overflow-hidden relative ';
  
  // Border style
  if (borderStyle === 'solid') {
    classes += 'border border-gray-800 ';
  } else if (borderStyle === 'gradient') {
    classes += 'before:absolute before:inset-0 before:padding-[1px] before:rounded-xl before:bg-gradient-to-r before:from-teal-500/30 before:to-blue-500/30 before:-z-10 ';
  }
  
  // Hover effect classes
  if (hoverEffect === 'glow') {
    classes += 'hover:shadow-[0_0_25px_rgba(20,184,166,0.15)] transition-shadow duration-300 ';
  } else if (hoverEffect === 'scale') {
    classes += 'hover:scale-[1.02] transition-transform duration-300 ';
  } else if (hoverEffect === 'border') {
    classes += 'hover:border-teal-500/30 transition-colors duration-300 ';
  }
  
  // Combine with additional classes
  classes += className;
  
  // If we want animation effects
  if (animate) {
    return (
      <motion.div
        className={classes}
        whileHover={{ 
          y: -5,
          transition: { duration: 0.2 } 
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {/* Background glow effect */}
        <motion.div 
          className="absolute -inset-0.5 bg-gradient-to-r from-teal-500 to-blue-400 rounded-xl opacity-0 blur transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 0.15 }}
        />
        
        {/* Content wrapper */}
        <div className="relative z-10">
          {children}
        </div>
      </motion.div>
    );
  }
  
  // Without animation
  return (
    <div 
      className={classes}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default AccentBox; 