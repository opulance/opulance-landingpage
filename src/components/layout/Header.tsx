"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { getLinkPath } from '@/lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [baseUrl, setBaseUrl] = useState('');

  // Handle scroll event to add backdrop when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Set the base URL for links
    setBaseUrl('/opulance-landingpage');
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/70 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-12">
            <a href={baseUrl} className="text-2xl font-bold text-white">
              <span className="text-gradient-accent">
                Opulance
              </span>
              <span className="ml-1">AI</span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <a 
                href={baseUrl}
                className="text-gray-300 hover:text-teal-400 transition-colors py-2 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
              
              <div className="relative group">
                <button 
                  onClick={() => setProductsOpen(!productsOpen)}
                  className="text-gray-300 hover:text-teal-400 transition-colors py-2 flex items-center"
                >
                  Products
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${productsOpen ? 'rotate-180' : ''}`} 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                
                {/* Dropdown Menu - hover gradient border */}
                <div 
                  className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg z-50 overflow-hidden transition-all duration-200 ease-in-out transform origin-top-left ring-accent
                             ${productsOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                  style={{
                    background: 'linear-gradient(to right, rgba(20, 184, 166, 0.05), rgba(59, 130, 246, 0.05))',
                  }}
                >
                  <div className="py-1 backdrop-blur-lg border border-teal-500/20 rounded-md">
                    <Link 
                      href={getLinkPath('#ai-platform')}
                      className="block px-4 py-2 text-sm text-white hover:bg-teal-500/10 transition-colors"
                    >
                      AI Agent Platform
                    </Link>
                    <Link 
                      href={getLinkPath('#analytics')}
                      className="block px-4 py-2 text-sm text-white hover:bg-teal-500/10 transition-colors"
                    >
                      Analytics Dashboard
                    </Link>
                    <Link 
                      href={getLinkPath('#sentiment')}
                      className="block px-4 py-2 text-sm text-white hover:bg-teal-500/10 transition-colors"
                    >
                      Sentiment Analyzer
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link 
                href={getLinkPath('#portfolio')}
                className="text-gray-300 hover:text-teal-400 transition-colors py-2 relative group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href={getLinkPath('#contact')}
                className="text-gray-300 hover:text-teal-400 transition-colors py-2 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-teal-500 to-blue-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href={getLinkPath('#consultation')}
              className="btn-accent px-6 py-2 rounded-md"
            >
              Book an Assessment
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden flex items-center text-gray-300" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-teal-400">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } bg-gray-900/95 backdrop-blur-md border-t border-gray-800`}
      >
        <div className="container mx-auto px-4 py-6 space-y-6">
          <nav className="flex flex-col space-y-4">
            <Link 
              href={baseUrl}
              className="text-gray-200 hover:text-teal-400 transition-colors py-2 border-b border-gray-800 pb-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="py-2 border-b border-gray-800 pb-3">
              <button className="flex items-center justify-between w-full text-gray-200 hover:text-teal-400 transition-colors">
                <span>Products</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  href={getLinkPath('#ai-consulting')}
                  className="text-gray-300 hover:text-teal-400 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Consulting
                </Link>
                <Link 
                  href={getLinkPath('#custom-ai-solutions')}
                  className="text-gray-300 hover:text-teal-400 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Custom AI Solutions
                </Link>
                <Link 
                  href={getLinkPath('#ai-integration')}
                  className="text-gray-300 hover:text-teal-400 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Integration Services
                </Link>
              </div>
            </div>
            
            <Link 
              href={getLinkPath('#portfolio')}
              className="text-gray-200 hover:text-teal-400 transition-colors py-2 border-b border-gray-800 pb-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            
            <Link 
              href={getLinkPath('#contact')}
              className="text-gray-200 hover:text-teal-400 transition-colors py-2 border-b border-gray-800 pb-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          
          <div className="pt-2">
            <Link 
              href={getLinkPath('#consultation')}
              className="btn-accent block w-full py-3 text-center rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Book an Assessment
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 