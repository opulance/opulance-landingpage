"use client"

import Image from 'next/image';

const FeatureShowcase = () => {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Streamline your CI/CD pipelines with AI</h2>
          <div className="max-w-3xl mx-auto">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="p-4">
                <p className="text-gray-700 mb-2">Build 4x faster than the competition. Slash pipeline execution time and accelerate test cycles by up to 80% using ML-based Test Intelligence.</p>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-2">Deploy with or without gates. Use gates to control releases or deploy changes to production without requiring manual approvals.</p>
              </div>
              <div className="p-4">
                <p className="text-gray-700 mb-2">Rollback quickly if needed. Leverage AI-assisted deployment verification to automatically rollback a release if a regression is found.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-50 rounded-xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="md:w-1/2">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">Any app. Anywhere.</h3>
              <p className="text-gray-700 mb-8">Deploy services on different platforms</p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {/* Platform logos */}
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                  <span className="font-medium text-gray-700">AWS</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                  <span className="font-medium text-gray-700">Azure</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                  <span className="font-medium text-gray-700">GCP</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                  <span className="font-medium text-gray-700">Kubernetes</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                  <span className="font-medium text-gray-700">Lambda</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                  <span className="font-medium text-gray-700">OCI</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                  <span className="font-medium text-gray-700">Tanzu</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm flex items-center justify-center h-16">
                  <span className="font-medium text-gray-700">WinRM</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <div className="bg-white shadow-lg rounded-lg p-4 md:p-8">
                <div className="aspect-ratio-[16/9] bg-gray-100 rounded-md mb-4 flex items-center justify-center">
                  <div className="text-gray-500">Platform Demo Screenshot</div>
                </div>
                <h4 className="text-xl font-semibold mb-2">Leverage AI across the SDLC</h4>
                <p className="text-gray-600">Explore our robust, scalable and intelligent platform that helps you develop, deploy, and operate your software applications.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center">With a focus on security. At every step.</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Aggregate security scans in CI/CD pipelines</h4>
              <p className="text-gray-600">Easily configure and run AppSec scans with Opulance CI/CD stages or standalone mode, integrating with any CI/CD tooling.</p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">Vulnerability de-duplication and prioritization</h4>
              <p className="text-gray-600">Get centralized visibility into deduplicated security findings based on projects, pipelines or applications of interest.</p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">SBOM orchestration and SLSA attestation</h4>
              <p className="text-gray-600">SSCA upholds software integrity via attestations aligned with SLSA V1.0, assuring consumers of unaltered, tamper-free software.</p>
            </div>
            
            <div className="bg-white shadow-md rounded-lg p-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2">AI/ML driven vulnerability remediation</h4>
              <p className="text-gray-600">Leverage AI enhanced remediation guidance and contextual information to apply the right fixes with minimal triage.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase; 