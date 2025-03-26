"use client"

import Image from 'next/image';
import Link from 'next/link';

const Testimonials = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Hear from our customers</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See why hundreds of DevOps and engineering teams trust Opulance to automate processes, reduce manual interventions, and consolidate tools.
          </p>
          <div className="mt-6">
            <Link href="#" className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
              Read our customer stories
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Testimonial 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 mb-4 flex items-center">
              <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-sm font-medium">Company Logo</span>
              </div>
            </div>
            <p className="font-medium text-lg mb-2">Company reaches $1.2M annualized cost savings</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link href="#" className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors">
                Read story →
              </Link>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 mb-4 flex items-center">
              <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-sm font-medium">Company Logo</span>
              </div>
            </div>
            <p className="font-medium text-lg mb-2">Company Achieves saves 33% on Cloud Costs</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link href="#" className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors">
                Read story →
              </Link>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 mb-4 flex items-center">
              <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-sm font-medium">Company Logo</span>
              </div>
            </div>
            <p className="font-medium text-lg mb-2">Company reduced Kubernetes Cloud Costs by Millions in 5 months</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link href="#" className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors">
                Read story →
              </Link>
            </div>
          </div>
          
          {/* Testimonial 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="h-12 mb-4 flex items-center">
              <div className="w-24 h-8 bg-gray-200 rounded flex items-center justify-center">
                <span className="text-sm font-medium">Company Logo</span>
              </div>
            </div>
            <p className="font-medium text-lg mb-2">Company Saves $35,000 in First 30 Days with Cloud Asset Governance</p>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link href="#" className="text-indigo-600 text-sm font-medium hover:text-indigo-800 transition-colors">
                Read story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 