"use client"

import { Organization, WithContext } from 'schema-dts';
import { useEffect, useState } from 'react';

const SchemaMarkup = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);
  
  if (!mounted) return null;
  
  // Organization schema
  const organizationSchema: WithContext<Organization> = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Opulance AI',
    url: 'https://opulance-ai.com',
    logo: 'https://opulance-ai.com/opulance-landingpage/images/logo.png',
    description: 'Opulance AI specializes in building AI Agent systems and AI-powered applications to transform your business.',
    email: 'contact@opulance-ai.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'US'
    },
    sameAs: [
      'https://twitter.com/OpulanceAI',
      'https://linkedin.com/company/opulance-ai',
      'https://github.com/opulance-ai'
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-555-123-4567',
      contactType: 'customer service',
      email: 'support@opulance-ai.com',
      availableLanguage: ['English']
    },
    serviceArea: ['Worldwide'],
    foundingDate: '2023',
    founder: {
      '@type': 'Person',
      name: 'Opulance AI Team'
    },
    knowsAbout: [
      'Artificial Intelligence',
      'Machine Learning',
      'AI Agents',
      'Natural Language Processing',
      'Computer Vision'
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'AI Agent Systems',
        description: 'Custom AI agent systems for business automation and intelligence'
      },
      {
        '@type': 'Offer',
        name: 'AI-Powered Applications',
        description: 'Applications with embedded AI capabilities for enhanced functionality'
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
};

export default SchemaMarkup; 