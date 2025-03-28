"use client"

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

// Simple fallback component while the real component loads
const SimpleParticleFallback = ({ color = "#20c9b0" }: { color?: string }) => {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
    </div>
  );
};

// Dynamically import the heavy ParticleBackground component
const ParticleBackground = dynamic(
  () => import('./ParticleBackground'),
  { 
    ssr: false,
    loading: () => <SimpleParticleFallback />
  }
);

// Interface for props
interface DynamicParticleBackgroundProps {
  color?: string;
  count?: number;
}

// Wrapper component that handles the dynamic import
const DynamicParticleBackground = (props: DynamicParticleBackgroundProps) => {
  const [isMounted, setIsMounted] = useState(false);
  
  // Only show on client-side
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  if (!isMounted) return <SimpleParticleFallback color={props.color} />;
  
  return <ParticleBackground {...props} />;
};

export default DynamicParticleBackground; 