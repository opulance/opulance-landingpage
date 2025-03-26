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
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedCursor color="#14b8a6" />
      <Header />
      <main>
        <Hero />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Features />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <FeatureShowcase />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <Testimonials />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <CTA />
        </motion.div>
      </main>
      <Footer />
      <Chatbot />
    </div>
  );
}
