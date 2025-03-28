"use client"

import { useEffect, useRef } from 'react';

interface CalendlyIntegrationProps {
  url?: string;
  styles?: React.CSSProperties;
  className?: string;
}

const CalendlyIntegration = ({ 
  url = "https://calendly.com/opulance-ai/30min", // Replace with your actual Calendly URL
  styles = {},
  className = ""
}: CalendlyIntegrationProps) => {
  const calendlyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Calendly when script is loaded
    script.onload = () => {
      if (window.Calendly && calendlyRef.current) {
        window.Calendly.initInlineWidget({
          url,
          parentElement: calendlyRef.current,
          prefill: {},
          utm: {}
        });
      }
    };

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script);
      
      // Remove any Calendly related elements
      const calendlyElements = document.querySelectorAll('[data-calendly]');
      calendlyElements.forEach((element) => {
        element.remove();
      });
    };
  }, [url]);

  return (
    <div 
      ref={calendlyRef} 
      className={`calendly-inline-widget ${className}`} 
      style={{ 
        minWidth: '320px',
        height: '630px',
        ...styles
      }} 
      data-url={url}
    />
  );
};

export default CalendlyIntegration;

// Add TypeScript declaration for Calendly
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
        prefill?: Record<string, any>;
        utm?: Record<string, any>;
      }) => void;
    };
  }
} 