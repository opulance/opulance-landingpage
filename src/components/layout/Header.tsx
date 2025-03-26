"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="mr-8 font-bold text-2xl">
            Opulance
          </Link>
          
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center space-x-1 py-2">
                <span>Products</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="bg-white shadow-lg rounded-md p-4 w-64">
                  <div className="mb-4">
                    <h3 className="font-semibold mb-2">DevOps Modernization</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-gray-600 hover:text-gray-900">Continuous Integration</Link></li>
                      <li><Link href="#" className="text-gray-600 hover:text-gray-900">Continuous Delivery & GitOps</Link></li>
                      <li><Link href="#" className="text-gray-600 hover:text-gray-900">Feature Flags</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Secure Software Delivery</h3>
                    <ul className="space-y-2">
                      <li><Link href="#" className="text-gray-600 hover:text-gray-900">Security Testing Orchestration</Link></li>
                      <li><Link href="#" className="text-gray-600 hover:text-gray-900">Software Supply Chain Assurance</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            <Link href="#" className="py-2">Customers</Link>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 py-2">
                <span>Learn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="bg-white shadow-lg rounded-md p-4 w-64">
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Documentation</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Blog</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Resources Library</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Use Cases</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Events</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <button className="flex items-center space-x-1 py-2">
                <span>Company</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </button>
              <div className="absolute left-0 top-full hidden pt-2 group-hover:block">
                <div className="bg-white shadow-lg rounded-md p-4 w-64">
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">About Us</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Careers</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Security</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Partners</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Legal</Link></li>
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
        
        <div className="hidden lg:flex items-center space-x-4">
          <Link href="#contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
          <Link href="#get-started" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors">
            Get Started
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="lg:hidden flex items-center" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isMenuOpen ? 'hidden' : 'block'}`}>
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${isMenuOpen ? 'block' : 'hidden'}`}>
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white border-t border-gray-100`}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <div className="py-2 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium">Products</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            
            <Link href="#" className="py-2 border-b border-gray-100">Customers</Link>
            
            <div className="py-2 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium">Learn</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            
            <div className="py-2 border-b border-gray-100">
              <div className="flex justify-between items-center">
                <span className="font-medium">Company</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
            
            <div className="pt-4 flex flex-col space-y-4">
              <Link href="#contact" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
              <Link href="#get-started" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors text-center">
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header; 