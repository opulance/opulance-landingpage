"use client"

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-500">
                Opulance
              </span>
              <span className="ml-1">AI</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link 
                href="/" 
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <div className="relative group">
                <button className="flex items-center space-x-1 text-gray-300 hover:text-emerald-400 transition-colors py-2">
                  <span>Products</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
                </button>
                <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                  <div className="bg-gray-900/90 backdrop-blur-md border border-gray-800 rounded-lg p-4 w-64 shadow-lg shadow-emerald-500/5">
                    <ul className="space-y-2">
                      <li>
                        <Link 
                          href="#ai-consulting" 
                          className="text-gray-300 hover:text-emerald-400 block py-2 px-3 rounded-md hover:bg-gray-800/50 transition-colors"
                        >
                          AI Consulting
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="#custom-ai-solutions" 
                          className="text-gray-300 hover:text-emerald-400 block py-2 px-3 rounded-md hover:bg-gray-800/50 transition-colors"
                        >
                          Custom AI Solutions
                        </Link>
                      </li>
                      <li>
                        <Link 
                          href="#ai-integration" 
                          className="text-gray-300 hover:text-emerald-400 block py-2 px-3 rounded-md hover:bg-gray-800/50 transition-colors"
                        >
                          AI Integration Services
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <Link 
                href="#portfolio" 
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2 relative group"
              >
                Portfolio
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              
              <Link 
                href="#contact" 
                className="text-gray-300 hover:text-emerald-400 transition-colors py-2 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>
          </div>
          
          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="#consultation" 
              className="px-6 py-2 rounded-md bg-gradient-to-r from-emerald-500 to-green-400 text-black font-bold transition-all hover:shadow-[0_0_10px_rgba(52,211,153,0.7)] hover:scale-105"
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-400">
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
              href="/" 
              className="text-gray-200 hover:text-emerald-400 transition-colors py-2 border-b border-gray-800 pb-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            
            <div className="py-2 border-b border-gray-800 pb-3">
              <button className="flex items-center justify-between w-full text-gray-200 hover:text-emerald-400 transition-colors">
                <span>Products</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className="pl-4 mt-2 space-y-2">
                <Link 
                  href="#ai-consulting" 
                  className="text-gray-300 hover:text-emerald-400 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Consulting
                </Link>
                <Link 
                  href="#custom-ai-solutions" 
                  className="text-gray-300 hover:text-emerald-400 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Custom AI Solutions
                </Link>
                <Link 
                  href="#ai-integration" 
                  className="text-gray-300 hover:text-emerald-400 block py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  AI Integration Services
                </Link>
              </div>
            </div>
            
            <Link 
              href="#portfolio" 
              className="text-gray-200 hover:text-emerald-400 transition-colors py-2 border-b border-gray-800 pb-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            
            <Link 
              href="#contact" 
              className="text-gray-200 hover:text-emerald-400 transition-colors py-2 border-b border-gray-800 pb-3"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          
          <div className="pt-2">
            <Link 
              href="#consultation" 
              className="block w-full py-3 text-center rounded-md bg-gradient-to-r from-emerald-500 to-green-400 text-black font-bold"
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