"use client"

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
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedCursor color="#14b8a6" />
      <MouseTrail />
      <RippleEffect />
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />
        
        {/* Divider with down direction */}
        <SectionDivider direction="down" />
        
        {/* Features Section */}
        <ScrollReveal>
          <FloatingElements variant="dots" count={8} zIndex={1} />
          <Features />
        </ScrollReveal>
        
        {/* Divider with up direction */}
        <SectionDivider direction="up" />
        
        {/* Technology Showcase */}
        <ScrollReveal direction="right" delay={0.2}>
          <FloatingElements variant="squares" count={6} zIndex={1} />
          <FeatureShowcase />
        </ScrollReveal>
        
        {/* Divider with down direction */}
        <SectionDivider direction="down" />
        
        {/* Testimonials and Case Studies */}
        <ScrollReveal direction="left" delay={0.1}>
          <FloatingElements variant="mixed" count={10} zIndex={1} />
          <Testimonials />
        </ScrollReveal>
        
        {/* Divider with up direction */}
        <SectionDivider direction="up" />
        
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
