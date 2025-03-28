"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getLinkPath } from '@/lib/utils';
import EmailForm from './EmailForm';
import CalendlyIntegration from './CalendlyIntegration';

const CTA = () => {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);
  const [activeTab, setActiveTab] = useState<'form' | 'calendly'>('form');

  // Show floating CTA after scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setShowFloatingCTA(true);
      } else {
        setShowFloatingCTA(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Main CTA Section */}
      <section id="consultation" className="py-24 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to transform your business with AI?
            </h2>
            <p className="text-xl text-gray-300">
              Get in touch with our experts to discuss your specific needs and schedule a free assessment call.
            </p>
          </div>
          
          {/* Tab selector */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex p-1 rounded-lg bg-gray-800 border border-gray-700">
              <button
                onClick={() => setActiveTab('form')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'form' 
                    ? 'bg-gradient-to-r from-teal-500 to-blue-400 text-black font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Project Inquiry
              </button>
              <button
                onClick={() => setActiveTab('calendly')}
                className={`px-6 py-2 rounded-md transition-all ${
                  activeTab === 'calendly' 
                    ? 'bg-gradient-to-r from-teal-500 to-blue-400 text-black font-medium' 
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Book a Call
              </button>
            </div>
          </div>
          
          {/* Tab content */}
          <div className="max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              {activeTab === 'form' ? (
                <motion.div
                  key="form"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <EmailForm />
                </motion.div>
              ) : (
                <motion.div
                  key="calendly"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="rounded-xl overflow-hidden border border-gray-700">
                    <CalendlyIntegration 
                      styles={{ height: '700px' }}
                      className="w-full"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Floating CTA Button - positioned to the left of chatbot */}
      <div 
        className={`fixed bottom-6 left-6 z-40 transition-all duration-300 ${
          showFloatingCTA ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
        }`}
      >
        <Link 
          href={getLinkPath('#consultation')}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-teal-500 to-blue-400 text-black font-bold shadow-lg shadow-teal-500/20 hover:shadow-[0_0_15px_rgba(20,184,166,0.6)] hover:scale-105 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Book Assessment Call
        </Link>
      </div>
    </>
  );
};

export default CTA; 