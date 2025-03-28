"use client"

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import DynamicParticleBackground from '@/components/ui/DynamicParticleBackground';
import { getAssetPath, getLinkPath } from '@/lib/utils';

// Define possible image paths to try
const IMAGE_PATHS = [
  '/images/ai-tree.png',                     // Base path
  '/opulance-landingpage/images/ai-tree.png' // GitHub Pages path
];

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imagePath, setImagePath] = useState(IMAGE_PATHS[0]);
  const imageAttempts = useRef(0);
  const maxAttempts = IMAGE_PATHS.length * 2; // Try each path multiple times

  // Set image path on client-side and handle loading
  useEffect(() => {
    // Only run in browser
    if (typeof window === 'undefined') return;

    // Reset error state when component mounts
    setImageError(false);
    setImageLoaded(false);
    imageAttempts.current = 0;
    
    // Try to load the dynamic path first
    const dynamicPath = getAssetPath('/images/ai-tree.png');
    
    // Add the dynamic path to our list of paths to try if it's not already there
    if (!IMAGE_PATHS.includes(dynamicPath)) {
      IMAGE_PATHS.unshift(dynamicPath);
    }
    
    // Set initial path
    setImagePath(IMAGE_PATHS[0]);
    
    // Create a function to try loading the image with different paths
    const tryLoadingImage = (index = 0) => {
      if (index >= IMAGE_PATHS.length) {
        setImageError(true);
        return;
      }
      
      const path = IMAGE_PATHS[index];
      const img = new window.Image();
      
      // Set up load/error handlers
      img.onload = () => {
        setImagePath(path);
        setImageLoaded(true);
        setImageError(false);
      };
      
      img.onerror = () => {
        imageAttempts.current += 1;
        if (imageAttempts.current < maxAttempts) {
          // Try the next path after a slight delay
          setTimeout(() => {
            tryLoadingImage((index + 1) % IMAGE_PATHS.length);
          }, 300);
        } else {
          setImageError(true);
        }
      };
      
      // Start loading
      img.src = path;
    };
    
    // Start the loading process
    tryLoadingImage();
    
    return () => {
      // No cleanup needed as we're using local functions
    };
  }, []);

  // Custom image component with fallbacks
  const AITreeImage = () => {
    if (imageError) {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-teal-400 p-8 rounded-lg bg-teal-900/20 backdrop-blur-sm border border-teal-500/20 animated-border">
            <p className="text-xl">AI Visualization</p>
            <div className="w-40 h-40 mx-auto mt-4 rounded-full bg-teal-500/20 animate-pulse flex items-center justify-center">
              <svg className="w-20 h-20 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
          </div>
        </div>
      );
    }
    
    return (
      <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
        {/* Show loading indicator until image is loaded */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <div className="w-40 h-40 rounded-full bg-teal-500/20 animate-pulse"></div>
          </div>
        )}
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ 
                opacity: imageLoaded ? 1 : 0,
                scale: imageLoaded ? 1 : 0.95
              }}
              transition={{ 
                duration: 2.5, 
                ease: "easeOut"
              }}
              className="w-full h-full"
            >
              <Image
                src={imagePath}
                alt="AI Knowledge Tree"
                fill
                className="object-contain z-0"
                priority
                onLoad={() => setImageLoaded(true)}
                onError={() => {
                  imageAttempts.current += 1;
                  if (imageAttempts.current < maxAttempts) {
                    // Try the next path
                    const nextIndex = imageAttempts.current % IMAGE_PATHS.length;
                    setImagePath(IMAGE_PATHS[nextIndex]);
                  } else {
                    setImageError(true);
                  }
                }}
                unoptimized={true}
              />
            </motion.div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-24 pb-16 md:py-0">
      {/* Particle Background */}
      <DynamicParticleBackground color="#20c9b0" />
      
      {/* Animated gradient blob */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-blob" aria-hidden="true"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-blob animation-delay-2000" aria-hidden="true"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-blob animation-delay-4000" aria-hidden="true"></div>
      
      {/* Additional accent elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-teal-500/30 rounded-full blur-xl animate-accent-pulse" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 left-1/5 w-16 h-16 bg-teal-500/20 rounded-full blur-xl animate-accent-pulse animation-delay-2000" aria-hidden="true"></div>
      
      {/* Background with fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black from-70% via-black via-90% to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 pt-20 sm:pt-0 max-w-7xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left side - Content */}
          <div className="z-10 text-left px-0 md:px-2">
            <div className="pr-0 md:pr-4 max-w-lg">
              <div className="mb-4 mt-4">
                <motion.span 
                  className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                >
                  Advanced AI
                </motion.span>
                <motion.span 
                  className="block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-display"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                >
                  Solutions
                </motion.span>
                <motion.span 
                  className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
                >
                  For Your Business
                </motion.span>
              </div>
              <motion.p 
                className="text-base md:text-lg text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.9, ease: "easeInOut" }}
              >
                Leverage cutting-edge artificial intelligence to transform your operations,
                enhance customer experiences, and drive innovation.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              >
                <Link 
                  href={getLinkPath('#contact')}
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-teal-500 to-blue-400 text-black font-bold text-base transition-all hover:shadow-[0_0_15px_rgba(20,184,166,0.8)] hover:scale-105 border border-teal-500/50 animated-border"
                >
                  Book a Consultation
                </Link>
                <Link 
                  href={getLinkPath('#services')}
                  className="px-6 py-3 rounded-lg bg-black text-white border border-gray-700 font-medium text-base hover:bg-gray-900 transition-all backdrop-blur-sm"
                >
                  Explore Services
                </Link>
              </motion.div>
            </div>
          </div>
          
          {/* Right side - Image */}
          <motion.div 
            className="relative mt-8 md:mt-0 h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px] px-0 md:px-0 md:col-span-1 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.8, delay: 2.5, ease: "easeInOut" }}
          >
            <motion.div 
              className="w-full h-full flex items-center justify-center"
              animate={{ 
                y: [0, -10, 0], 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut" 
              }}
            >
              <AITreeImage />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 2, ease: "easeInOut" }}
      >
        <svg className="w-8 h-8 text-teal-400 animate-accent-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero; 