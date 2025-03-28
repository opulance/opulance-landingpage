"use client"

import { useState, useEffect } from 'react';
import Header from "@/components/layout/Header";
import Hero from "@/components/layout/Hero";
import Features from "@/components/layout/Features";
import FeatureShowcase from "@/components/layout/FeatureShowcase";
import Testimonials from "@/components/layout/Testimonials";
import CTA from "@/components/layout/CTA";
import Footer from "@/components/layout/Footer";
import Chatbot from "@/components/layout/Chatbot";
import RippleEffect from '@/components/ui/RippleEffect';
import SectionDivider from '@/components/ui/SectionDivider';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FloatingElements from '@/components/ui/FloatingElements';
import { useRenderingTier } from '@/lib/hooks/useRenderingTier';

export default function Home() {
  const { effectsEnabled, isLoaded, toggleEffects, shouldEnableEffect } = useRenderingTier();
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Only render RippleEffect on the client and if effects are enabled
  const clientSideEffects = isMounted && effectsEnabled && shouldEnableEffect('tier2') && (
    <RippleEffect />
  );
  
  return (
    <>
      <div className="min-h-screen flex flex-col">
        {clientSideEffects}
        
        <Header />
        
        <main>
          {/* Hero Section */}
          <Hero />
          
          {/* Divider with down direction - right orientation */}
          {effectsEnabled && shouldEnableEffect('tier1') && (
            <SectionDivider direction="down" orientation="right" />
          )}
          
          {/* Features Section */}
          <ScrollReveal>
            {effectsEnabled && shouldEnableEffect('tier2') && (
              <FloatingElements variant="dots" count={8} zIndex={1} />
            )}
            <Features />
          </ScrollReveal>
          
          {/* Divider with up direction - left orientation */}
          {effectsEnabled && shouldEnableEffect('tier1') && (
            <SectionDivider direction="up" orientation="left" />
          )}
          
          {/* Technology Showcase */}
          <ScrollReveal direction="right" delay={0.2}>
            {effectsEnabled && shouldEnableEffect('tier2') && (
              <FloatingElements variant="squares" count={6} zIndex={1} />
            )}
            <FeatureShowcase />
          </ScrollReveal>
          
          {/* Divider with down direction - right orientation */}
          {effectsEnabled && shouldEnableEffect('tier1') && (
            <SectionDivider direction="down" orientation="right" />
          )}
          
          {/* Testimonials and Case Studies */}
          <ScrollReveal direction="left" delay={0.1}>
            {effectsEnabled && shouldEnableEffect('tier2') && (
              <FloatingElements variant="mixed" count={10} zIndex={1} />
            )}
            <Testimonials />
          </ScrollReveal>
          
          {/* Divider with up direction - left orientation */}
          {effectsEnabled && shouldEnableEffect('tier1') && (
            <SectionDivider direction="up" orientation="left" />
          )}
          
          {/* Call to Action */}
          <ScrollReveal direction="up" delay={0.2}>
            <CTA />
          </ScrollReveal>
        </main>
        
        <Footer />
        
        {/* Effects Toggle Button with lower z-index to ensure chatbot renders on top */}
        {isMounted && isLoaded && (
          <button 
            onClick={toggleEffects}
            className="fixed bottom-6 right-24 z-40 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors px-3 py-2 rounded-full text-xs border border-teal-500/30 text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            aria-label={effectsEnabled ? 'Disable visual effects' : 'Enable visual effects'}
          >
            {effectsEnabled ? 'Disable Effects' : 'Enable Effects'}
          </button>
        )}
        
        {/* Chatbot rendered last to ensure it appears on top */}
        <Chatbot />
      </div>
    </>
  );
}
