"use client"

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useState } from 'react';

const Hero = () => {
  const [imageError, setImageError] = useState(false);

  return (
    <section className="h-screen flex items-center relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          {/* Left side - Content */}
          <motion.div 
            className="z-10 text-left px-0 md:px-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="pr-0 md:pr-4 max-w-lg">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white font-display">
                <span className="block">Advanced AI</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                  Solutions
                </span>
                <span className="block text-white">For Your Business</span>
              </h1>
              <p className="text-base md:text-lg text-gray-300 mb-6">
                Leverage cutting-edge artificial intelligence to transform your operations,
                enhance customer experiences, and drive innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link 
                  href="#contact" 
                  className="px-6 py-3 rounded-lg bg-gradient-to-r from-emerald-500 to-green-400 text-black font-bold text-base transition-all hover:shadow-[0_0_15px_rgba(52,211,153,0.8)] hover:scale-105"
                >
                  Book a Consultation
                </Link>
                <Link 
                  href="#services" 
                  className="px-6 py-3 rounded-lg bg-gray-800/60 backdrop-blur-sm text-white border border-gray-700 font-medium text-base hover:bg-gray-700/60 transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </motion.div>
          
          {/* Right side - Image */}
          <motion.div 
            className="relative h-full min-h-[450px] md:min-h-[650px] px-0 md:px-0 md:col-span-1 flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, delay: 0.2 }}
          >
            <div className="absolute top-0 left-0 w-full h-full md:relative md:w-full md:h-full flex items-center justify-center">
              {/* Remove the glowing blobs for a fully black background */}
            
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-emerald-400 p-8 rounded-lg bg-emerald-900/20 backdrop-blur-sm border border-emerald-500/20">
                    <p className="text-xl">Please save the tree image to:</p>
                    <p className="font-mono mt-2 mb-4">public/images/ai-tree.png</p>
                    <div className="w-40 h-40 mx-auto rounded-full bg-emerald-500/20 animate-pulse"></div>
                  </div>
                </div>
              ) : (
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                  <div className="relative w-full h-full md:max-w-full lg:max-w-[600px] xl:max-w-[700px] 2xl:max-w-[800px] pt-4">
                    <Image
                      src="/images/ai-tree.png"
                      alt="AI Knowledge Tree"
                      fill
                      className="object-contain z-0 scale-100"
                      style={{
                        objectPosition: 'center 55%'
                      }}
                      priority
                      onError={() => setImageError(true)}
                    />
                  </div>
                </div>
              )}
            </div>
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
        <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero; 