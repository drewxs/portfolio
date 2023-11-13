import { Analytics } from '@vercel/analytics/react';
import { Metadata, Viewport } from 'next';
import { Source_Code_Pro } from 'next/font/google';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { meta } from '@/data';
import '@/styles/_main.scss';
import { Wrapper } from '@/types';

import { Providers } from './providers';
import { Scripts } from './scripts';

const sourceCodePro = Source_Code_Pro({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#040404',
};

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: meta.domain,
    siteName: meta.siteName,
    images: [{ url: `/og-1260x630.jpg`, width: 1260, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  alternates: { canonical: meta.domain },
  robots: { index: true },
  applicationName: 'AXS',
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
