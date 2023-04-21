import { Analytics } from '@vercel/analytics/react';
import { Source_Code_Pro } from 'next/font/google';
import Script from 'next/script';
import React from 'react';

// import { ThemeProvider } from 'next-themes';
import { Footer, Navbar } from '@/components';
import { meta } from '@/data';
import '@/styles/_main.scss';

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

const Layout = ({ children }: LayoutProps) => {
  return (
    <html data-theme='dark' lang='en' className={sourceCodePro.className}>
      <head>
        {/* Scripts */}
        <Script src={`https://www.google.com/recaptcha/api.js`} />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');
          `}
        </Script>
      </head>
      <Analytics />
      {/* <ThemeProvider> */}
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
      {/* </ThemeProvider> */}
    </html>
  );
};

export default Layout;
