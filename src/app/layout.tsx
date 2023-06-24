import { Analytics } from '@vercel/analytics/react';
import { Source_Code_Pro } from 'next/font/google';
import React from 'react';

import { Footer, Navbar } from '@/components';
import { meta } from '@/data';
import '@/styles/_main.scss';

import { Providers } from './providers';
import { Scripts } from './scripts';

const sourceCodePro = Source_Code_Pro({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  display: 'swap',
});

export const metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.domain,
    siteName: meta.siteName,
    images: [`/og-1260x630.jpg`],
    locale: 'en-US',
    type: 'website',
  },
  alternates: {
    canonical: meta.domain,
  },
  robots: {
    index: true,
  },
  applicationName: 'AXS',
  themeColor: '#040404',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  icons: {
    icon: [
      'favicon.ico',
      'favicon-16x16.png',
      'favicon-32x32.png',
      'favicon-96x96.png',
      'favicon-128x128.png',
      'favicon-196x196.png',
    ],
    apple: [
      'apple-touch-icon-57x57.png',
      'apple-touch-icon-60x60.png',
      'apple-touch-icon-72x72.png',
      'apple-touch-icon-76x76.png',
      'apple-touch-icon-114x114.png',
      'apple-touch-icon-120x120.png',
      'apple-touch-icon-144x144.png',
      'apple-touch-icon-152x152.png',
    ],
  },
};

const Layout = ({ children }: Wrapper) => {
  return (
    <html lang='en' className={sourceCodePro.className}>
      <head>
        <Scripts />
      </head>
      <Analytics />
      <body>
        <Providers>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
};

export default Layout;
