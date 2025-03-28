import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { Viewport } from 'next';
import { AnimatePresence } from "framer-motion";
import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import SchemaMarkup from '@/components/SchemaMarkup';

// Polyfill for Intl API for older browsers
import 'intl';
import 'intl/locale-data/jsonp/en';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-space',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000'
}

export const metadata: Metadata = {
  title: 'Opulance AI - Building Intelligent Solutions',
  description: 'Opulance AI specializes in building AI Agent systems and AI-powered applications to transform your business.',
  applicationName: 'Opulance AI',
  authors: [{ name: 'Opulance AI Team' }],
  keywords: [
    'AI', 'Artificial Intelligence', 'Machine Learning', 
    'AI Agents', 'AI Solutions', 'AI Development', 
    'NLP', 'Computer Vision', 'Predictive Analytics'
  ],
  creator: 'Opulance AI',
  publisher: 'Opulance AI',
  generator: 'Next.js',
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL('https://opulance-ai.com'),
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: 'Opulance AI - Building Intelligent Solutions',
    description: 'Opulance AI specializes in building AI Agent systems and AI-powered applications to transform your business.',
    url: 'https://opulance-ai.com',
    siteName: 'Opulance AI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opulance-landingpage/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Opulance AI - Building Intelligent Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Opulance AI - Building Intelligent Solutions',
    description: 'Opulance AI specializes in building AI Agent systems and AI-powered applications to transform your business.',
    creator: '@OpulanceAI',
    images: ['/opulance-landingpage/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} bg-gray-950 text-white antialiased min-h-screen`}>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
        <Analytics />
        <SchemaMarkup />
      </body>
    </html>
  );
}
