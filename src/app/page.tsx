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
import AnimatedCursor from '@/components/ui/AnimatedCursor';
import MouseTrail from '@/components/ui/MouseTrail';
import RippleEffect from '@/components/ui/RippleEffect';
import SectionDivider from '@/components/ui/SectionDivider';
import ScrollReveal from '@/components/ui/ScrollReveal';
import FloatingElements from '@/components/ui/FloatingElements';

export default function Home() {
  const [effectsEnabled, setEffectsEnabled] = useState(true);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Check if user has previously set a preference
    const savedPreference = localStorage.getItem('visualEffectsEnabled');
    if (savedPreference !== null) {
      setEffectsEnabled(savedPreference === 'true');
    }
    
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion && savedPreference === null) {
      setEffectsEnabled(false);
    }
  }, []);
  
  const toggleEffects = () => {
    const newValue = !effectsEnabled;
    setEffectsEnabled(newValue);
    localStorage.setItem('visualEffectsEnabled', newValue.toString());
  };
  
  // Only render certain components on the client
  const clientSideEffects = isMounted && effectsEnabled && (
    <>
      <AnimatedCursor color="#14b8a6" />
      <MouseTrail />
      <RippleEffect />
    </>
  );
  
  return (
    <div className="min-h-screen flex flex-col">
      {clientSideEffects}
      
      <Header />
      
      {/* Effects Toggle Button - positioned above the chatbot button */}
      {isMounted && (
        <button 
          onClick={toggleEffects}
          className="fixed bottom-24 right-6 z-50 bg-gray-900/50 backdrop-blur-sm hover:bg-gray-800/70 transition-colors px-3 py-2 rounded-full text-xs border border-teal-500/30 text-teal-400 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
          aria-label={effectsEnabled ? 'Disable visual effects' : 'Enable visual effects'}
        >
          {effectsEnabled ? 'Disable Effects' : 'Enable Effects'}
        </button>
      )}

      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Divider with down direction - right orientation */}
        {effectsEnabled && <SectionDivider direction="down" orientation="right" />}
        
        {/* Features Section */}
        <ScrollReveal>
          {effectsEnabled && <FloatingElements variant="dots" count={8} zIndex={1} />}
          <Features />
        </ScrollReveal>
        
        {/* Divider with up direction - left orientation */}
        {effectsEnabled && <SectionDivider direction="up" orientation="left" />}
        
        {/* Technology Showcase */}
        <ScrollReveal direction="right" delay={0.2}>
          {effectsEnabled && <FloatingElements variant="squares" count={6} zIndex={1} />}
          <FeatureShowcase />
        </ScrollReveal>
        
        {/* Divider with down direction - right orientation */}
        {effectsEnabled && <SectionDivider direction="down" orientation="right" />}
        
        {/* Testimonials and Case Studies */}
        <ScrollReveal direction="left" delay={0.1}>
          {effectsEnabled && <FloatingElements variant="mixed" count={10} zIndex={1} />}
          <Testimonials />
        </ScrollReveal>
        
        {/* Divider with up direction - left orientation */}
        {effectsEnabled && <SectionDivider direction="up" orientation="left" />}
        
        {/* Call to Action */}
        <ScrollReveal direction="up" delay={0.2}>
          <CTA />
        </ScrollReveal>
      </main>
      
      <Footer />
      <Chatbot />
    </div>
  );
}
