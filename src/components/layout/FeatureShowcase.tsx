"use client"

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TechLine {
  id: number;
  width: string;
  top: string;
  left: string;
  rotation: string;
}

const FeatureShowcase = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [techLines, setTechLines] = useState<TechLine[]>([]);
  
  // Generate tech pattern lines on client side only
  useEffect(() => {
    const lines = Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      width: `${20 + i * 5}%`,
      top: `${10 + i * 8}%`,
      left: `${Math.sin(i) * 20 + 10}%`,
      rotation: `${i * 5}deg`
    }));
    
    setTechLines(lines);
  }, []);
  
  const showcases = [
    {
      title: "Predictive Analytics",
      description: "Harness the power of AI to predict future trends and make data-driven decisions ahead of market shifts.",
      features: [
        "Demand forecasting",
        "Risk assessment",
        "Customer behavior prediction",
        "Resource optimization"
      ],
      image: "/images/showcase-analytics.jpg" // Placeholder
    },
    {
      title: "Natural Language Processing",
      description: "Unlock insights from text data and enable seamless human-computer interaction through advanced NLP.",
      features: [
        "Sentiment analysis",
        "Text classification",
        "Chatbot development",
        "Document summarization"
      ],
      image: "/images/showcase-nlp.jpg" // Placeholder
    },
    {
      title: "Computer Vision",
      description: "Implement visual intelligence into your systems to automate inspection, enhance security, and create new experiences.",
      features: [
        "Object detection",
        "Image classification",
        "Quality control automation",
        "Visual search capabilities"
      ],
      image: "/images/showcase-vision.jpg" // Placeholder
    }
  ];

  return (
    <section className="py-24 bg-gray-950 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute w-full h-full inset-0 bg-gradient-to-b from-black to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Technology</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge AI technologies that power transformative solutions across industries.
          </p>
        </div>
        
        {/* Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-2">
          {showcases.map((showcase, index) => (
            <button
              key={index}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === index 
                  ? 'bg-emerald-500 text-black' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setActiveTab(index)}
            >
              {showcase.title}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="order-2 md:order-1"
          >
            <h3 className="text-3xl font-bold mb-5 text-white">{showcases[activeTab].title}</h3>
            <p className="text-lg text-gray-300 mb-8">{showcases[activeTab].description}</p>
            
            <ul className="space-y-4">
              {showcases[activeTab].features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <div className="mr-3 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-10">
              <button className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-400 text-black font-bold rounded-lg hover:shadow-[0_0_15px_rgba(52,211,153,0.6)] transition-all hover:scale-105">
                Learn More
              </button>
            </div>
          </motion.div>
          
          <motion.div
            key={`image-${activeTab}`}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative h-[350px] bg-gray-800 rounded-xl overflow-hidden">
              {/* This would be replaced by actual images */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-emerald-900/30 to-blue-900/30">
                <span className="text-emerald-400 text-xl">{showcases[activeTab].title} Image</span>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl"></div>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
              
              {/* Tech pattern overlay */}
              <div className="absolute inset-0 opacity-20 pointer-events-none">
                {techLines.map((line) => (
                  <div 
                    key={line.id}
                    className="absolute bg-emerald-400/30 h-[1px]"
                    style={{
                      width: line.width,
                      top: line.top,
                      left: line.left,
                      transform: `rotate(${line.rotation})`,
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase; 