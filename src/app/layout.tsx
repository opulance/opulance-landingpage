import "./globals.css";
import { Inter, Space_Grotesk } from "next/font/google";
import { Viewport } from 'next';
import { AnimatePresence } from "framer-motion";

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

export const metadata = {
  title: "Opulance AI - Next Generation AI Solutions",
  description: "Transforming businesses with cutting-edge AI technologies and innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className={`${inter.className} bg-black text-white`}>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
