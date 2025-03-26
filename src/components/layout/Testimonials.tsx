"use client"

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "Opulance AI's predictive analytics solution has transformed our inventory management, reducing stockouts by 35% and improving customer satisfaction.",
    author: "Sarah Johnson",
    title: "CTO, RetailTech Innovations",
    avatar: "/images/testimonial-1.jpg" // Placeholder, would be replaced with actual images
  },
  {
    quote: "The custom NLP model developed by Opulance AI has enabled us to analyze customer feedback at scale, uncovering invaluable insights we were previously missing.",
    author: "Michael Chen",
    title: "Head of Data Science, ConsumerFirst",
    avatar: "/images/testimonial-2.jpg"
  },
  {
    quote: "Implementing Opulance AI's computer vision solution has dramatically improved our quality control process, reducing defects by 42% within the first quarter.",
    author: "Elena Rodriguez",
    title: "VP of Operations, ManufacturePro",
    avatar: "/images/testimonial-3.jpg"
  }
];

const caseStudies = [
  {
    title: "Healthcare Predictive Analytics",
    description: "Helped a leading hospital network reduce patient readmission rates by 28% using our custom machine learning algorithms.",
    image: "/images/case-study-1.jpg",
    stats: [
      { value: "28%", label: "Reduction in readmissions" },
      { value: "$3.2M", label: "Annual cost savings" }
    ]
  },
  {
    title: "Retail Customer Personalization",
    description: "Developed an AI-powered recommendation engine that increased average order value by 24% for a major e-commerce retailer.",
    image: "/images/case-study-2.jpg",
    stats: [
      { value: "24%", label: "Increase in AOV" },
      { value: "18%", label: "Higher conversion rate" }
    ]
  },
  {
    title: "Financial Fraud Detection",
    description: "Implemented an advanced AI system for a financial services provider that improved fraud detection accuracy by 41%.",
    image: "/images/case-study-3.jpg",
    stats: [
      { value: "41%", label: "Improved detection" },
      { value: "92%", label: "Reduction in false positives" }
    ]
  }
];

const Testimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeCaseStudy, setActiveCaseStudy] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="portfolio" className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Client Success Stories</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear what our clients have to say about their experience working with Opulance AI.
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            {/* Testimonial Cards */}
            <div className="h-[280px] md:h-[200px] relative">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeTestimonial}
                  className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm border border-gray-800 rounded-xl p-6 md:p-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center overflow-hidden">
                      <div className="text-3xl font-bold text-emerald-400">
                        {testimonials[activeTestimonial].author.charAt(0)}
                      </div>
                    </div>
                    
                    <div>
                      <blockquote className="text-lg md:text-xl text-gray-300 italic mb-4">
                        "{testimonials[activeTestimonial].quote}"
                      </blockquote>
                      
                      <footer>
                        <div className="font-bold text-white">{testimonials[activeTestimonial].author}</div>
                        <div className="text-emerald-400">{testimonials[activeTestimonial].title}</div>
                      </footer>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeTestimonial 
                      ? 'bg-emerald-400 w-8' 
                      : 'bg-gray-700 hover:bg-gray-600'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        
        {/* Case Studies */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Case Studies</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore how our AI solutions have delivered measurable results for organizations across industries.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_25px_rgba(16,185,129,0.1)]"
                whileHover={{ y: -10 }}
              >
                <div className="h-48 bg-gray-800 relative">
                  {/* This would be replaced with actual images */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-900/20 to-blue-900/20">
                    <span className="text-emerald-400 text-lg">Case Study Image</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-white">{caseStudy.title}</h3>
                  <p className="text-gray-300 mb-6">{caseStudy.description}</p>
                  
                  <div className="flex justify-between">
                    {caseStudy.stats.map((stat, statIndex) => (
                      <div key={statIndex} className="text-center">
                        <div className="text-2xl font-bold text-emerald-400">{stat.value}</div>
                        <div className="text-sm text-gray-400">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="px-8 py-3 border border-emerald-500 text-emerald-400 rounded-lg hover:bg-emerald-500/10 transition-all">
              View All Case Studies
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 