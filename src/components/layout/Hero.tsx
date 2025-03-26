"use client"

import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-indigo-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
              The Modern Software Delivery Platform.
            </h1>
            <p className="text-xl text-gray-600">
              Simplify your developer experience with the world's first AI-augmented software delivery platform.
            </p>
            <div>
              <Link href="#get-started" className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700 transition-colors">
                Get Started
              </Link>
            </div>
            
            <div className="pt-8">
              <p className="text-sm text-gray-500 mb-4">The world's largest companies trust the Opulance platform</p>
              <div className="flex flex-wrap gap-8 items-center">
                {/* These would be your client logos */}
                <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 1</div>
                <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 2</div>
                <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 3</div>
                <div className="w-24 h-12 bg-gray-200 rounded flex items-center justify-center">Logo 4</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white shadow-xl rounded-lg p-8 max-w-md mx-auto transform md:scale-110">
              <div className="aspect-ratio-[16/9] rounded-md bg-indigo-100 mb-6 flex items-center justify-center overflow-hidden">
                <div className="text-indigo-500 text-lg">Platform Demo Image</div>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Modern Software Delivery</h3>
              <p className="text-gray-600 mb-6">Accelerate innovation and expedite time-to-market with our AI-augmented suite of software delivery tools.</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-gray-700">Accelerate development by 4x</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 