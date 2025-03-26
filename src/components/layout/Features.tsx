"use client"

import { useState } from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z"/>
          <path d="M6 12h12"/>
          <path d="M12 6v12"/>
        </svg>
      ),
      title: "AI Consulting",
      description: "Our team of AI experts provides strategic guidance on how to implement AI solutions that align with your business objectives.",
      details: "We help organizations identify opportunities for AI adoption, develop implementation strategies, and navigate technical and ethical considerations to maximize the value of AI investments."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
          <polyline points="3.29 7 12 12 20.71 7"></polyline>
          <line x1="12" y1="22" x2="12" y2="12"></line>
        </svg>
      ),
      title: "Custom AI Solutions",
      description: "We build tailored AI solutions designed to address your unique business challenges, from predictive analytics to intelligent automation.",
      details: "Our team develops custom machine learning models, natural language processing systems, computer vision applications, and other AI technologies that integrate seamlessly with your existing infrastructure."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="3" x2="21" y1="9" y2="9"></line>
          <line x1="9" x2="9" y1="21" y2="9"></line>
        </svg>
      ),
      title: "AI Integration",
      description: "Seamlessly integrate AI capabilities into your existing systems and workflows to enhance productivity and drive business outcomes.",
      details: "We help organizations integrate AI into their applications, processes, and platforms, ensuring smooth data flow, system compatibility, and optimized performance."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12"></polyline>
          <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"></path>
        </svg>
      ),
      title: "AI Model Training",
      description: "Our expert data scientists train high-performance machine learning models using your organization's data to deliver accurate predictions.",
      details: "We develop and train custom machine learning models using best practices in data preprocessing, feature engineering, algorithm selection, and hyperparameter tuning."
    }
  ];

  return (
    <section id="services" className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We provide end-to-end AI solutions to transform your business operations,
            enhance customer experiences, and drive innovation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 rounded-xl p-6 h-full relative overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 } 
              }}
            >
              {/* Background glow effect */}
              <div 
                className={`absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-green-400 rounded-xl opacity-0 group-hover:opacity-100 blur transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-20' : 'opacity-0'
                }`}
              />
              
              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                <div className={`p-3 rounded-lg bg-emerald-500/10 w-fit mb-5 transition-colors duration-300 ${
                  hoveredIndex === index ? 'bg-emerald-500/20 text-emerald-400' : 'text-emerald-500'
                }`}>
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">{service.title}</h3>
                
                <p className="text-gray-300 mb-4 flex-grow">{service.description}</p>
                
                <motion.div 
                  className="mt-4 overflow-hidden"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: hoveredIndex === index ? 'auto' : 0,
                    opacity: hoveredIndex === index ? 1 : 0,
                    transition: { duration: 0.3 }
                  }}
                >
                  <p className="text-gray-400 mb-4 text-sm">{service.details}</p>
                  <div className="text-emerald-400 font-semibold inline-flex items-center group">
                    Learn more
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 