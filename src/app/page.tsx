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
  const { effectsEnabled, shouldEnableEffect } = useRenderingTier();
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
        
        {/* Chatbot rendered last to ensure it appears on top */}
        <Chatbot />
      </div>
    </>
  );
}
