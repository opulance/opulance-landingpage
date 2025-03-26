"use client"

import Link from 'next/link';

const CTA = () => {
  return (
    <section className="py-20 bg-indigo-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Try Opulance for free today</h2>
          <p className="text-lg text-indigo-100 mb-8">
            Simplify your developer experience with our AI-augmented software delivery platform.
          </p>
          <Link href="#get-started" className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-50 transition-colors">
            Sign up for free
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 