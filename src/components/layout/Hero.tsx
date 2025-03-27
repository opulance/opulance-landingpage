"use client"

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import ParticleBackground from '@/components/ui/ParticleBackground';
import { getAssetPath, getLinkPath } from '@/lib/utils';

const Hero = () => {
  const [imageError, setImageError] = useState(false);
  const [imagePath, setImagePath] = useState('');

  // Set image path on client-side
  useEffect(() => {
    setImagePath(getAssetPath('/images/ai-tree.png'));
  }, []);

  return (
    <section className="h-screen flex items-center relative overflow-hidden pt-24 md:pt-0">
      {/* Particle Background */}
      <ParticleBackground color="#20c9b0" />
      
      {/* Animated gradient blob */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-400/5 rounded-full blur-3xl animate-blob"></div>
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      
      {/* Additional accent elements */}
      <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-teal-500/30 rounded-full blur-xl animate-accent-pulse"></div>
      <div className="absolute bottom-1/4 left-1/5 w-16 h-16 bg-teal-500/20 rounded-full blur-xl animate-accent-pulse animation-delay-2000"></div>
      
      {/* Background with fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black from-70% via-black via-90% to-transparent z-0"></div>
      
      <div className="container mx-auto px-4 pt-20 sm:pt-0 max-w-7xl z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-6 sm:mt-0">
          {/* Left side - Content */}
          <div className="z-10 text-left px-0 md:px-2">
            <div className="pr-0 md:pr-4 max-w-lg">
              <div className="mb-4 mt-4">
                <motion.span 
                  className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                >
                  Advanced AI
                </motion.span>
                <motion.span 
                  className="block text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 font-display"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  Solutions
                </motion.span>
                <motion.span 
                  className="block text-4xl md:text-5xl lg:text-6xl font-bold text-white font-display"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  For Your Business
                </motion.span>
              </div>
              <motion.p 
                className="text-base md:text-lg text-gray-300 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.9 }}
              >
                Leverage cutting-edge artificial intelligence to transform your operations,
                enhance customer experiences, and drive innovation.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 1.2 }}
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
            className="relative h-full min-h-[450px] md:min-h-[650px] px-0 md:px-0 md:col-span-1 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
          >
            <motion.div 
              className="absolute top-0 left-0 w-full h-full md:relative md:w-full md:h-full flex items-center justify-center"
              animate={{ 
                y: [0, -10, 0], 
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut" 
              }}
            >
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-teal-400 p-8 rounded-lg bg-teal-900/20 backdrop-blur-sm border border-teal-500/20 animated-border">
                    <p className="text-xl">Please save the tree image to:</p>
                    <p className="font-mono mt-2 mb-4">public/images/ai-tree.png</p>
                    <div className="w-40 h-40 mx-auto rounded-full bg-teal-500/20 animate-pulse"></div>
              </div>
                </div>
              ) : (
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center glassmorphism">
                  <div className="relative w-full h-full md:max-w-full lg:max-w-[650px] xl:max-w-[750px] 2xl:max-w-[850px] pt-16">
                    <Image
                      src={imagePath || '/images/ai-tree.png'}
                      alt="AI Knowledge Tree"
                      fill
                      className="object-contain z-0 scale-105"
                      style={{
                        objectPosition: 'center 60%'
                      }}
                      priority
                      onError={() => setImageError(true)}
                    />
              </div>
            </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <svg className="w-8 h-8 text-teal-400 animate-accent-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero; 