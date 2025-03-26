"use client";

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
  direction: number;
}

interface ParticleBackgroundProps {
  color?: string;
  count?: number;
}

const ParticleBackground = ({ 
  color = "#20c9b0", 
  count = 20 
}: ParticleBackgroundProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // Only run on client
    if (typeof window === 'undefined') return;
    
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    // Generate particles
    const newParticles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100, // percentage
        y: Math.random() * 100, // percentage
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.3 + 0.1,
        speed: Math.random() * 10 + 5,
        direction: Math.random() * 360
      });
    }
    
    setParticles(newParticles);
    
    return () => window.removeEventListener('resize', updateDimensions);
  }, [count]);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            backgroundColor: color,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            x: [0, Math.cos(particle.direction) * 100, 0],
            y: [0, Math.sin(particle.direction) * 100, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: particle.speed,
            ease: "linear",
            repeatType: "reverse"
          }}
        />
      ))}
      
      {/* Add some blurred gradient orbs for depth */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

export default ParticleBackground; 