import { Analytics } from '@vercel/analytics/react';
import { Metadata, Viewport } from 'next';
import { Source_Code_Pro } from 'next/font/google';
import Script from 'next/script';

import { Footer } from '@/components/footer';
import { Navbar } from '@/components/navbar';
import { meta } from '@/data';
import '@/styles/_main.scss';
import { Wrapper } from '@/types';

import { Providers } from './providers';

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
      <Analytics />
      <Script src='https://www.google.com/recaptcha/api.js' strategy='afterInteractive' />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`} />
      <Script id='google-analytics'>
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');`}
      </Script>
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
