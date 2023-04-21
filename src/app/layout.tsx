import { Analytics } from '@vercel/analytics/react';
import { Source_Code_Pro } from 'next/font/google';
import Script from 'next/script';
import React from 'react';

// import { ThemeProvider } from 'next-themes';
import { Footer, Navbar } from '@/components';
import { meta } from '@/data';
import '@/styles/_main.scss';

const GTAG_ID = process.env.NEXT_PUBLIC_GTAG;

const sourceCodePro = Source_Code_Pro({
  weight: ['400'],
  style: ['normal'],
  subsets: ['latin'],
  fallback: ['Arial', 'Helvetica', 'sans-serif'],
  display: 'swap',
});

const Layout = ({ children }: LayoutProps) => {
  const { title, description, image, domain, sitename } = meta;

  return (
    <html data-theme='dark' lang='en' className={sourceCodePro.className}>
      <head>
        <title>{title}</title>
        <meta name='description' content={description} />

        {/* Open Graph */}
        <meta property='og:site_name' content={sitename} />
        <meta property='og:url' content={`https://${domain}`} />
        <meta property='og:title' content={title} />
        <meta property='og:type' content='website' />
        <meta property='og:description' content={description} />
        <meta property='og:image' content={`/${image}`} />

        {/* Icons */}
        <link rel='icon' href='favicon.ico' />
        <link rel='apple-touch-icon-precomposed' sizes='57x57' href='apple-touch-icon-57x57.png' />
        <link rel='apple-touch-icon-precomposed' sizes='114x114' href='apple-touch-icon-114x114.png' />
        <link rel='apple-touch-icon-precomposed' sizes='72x72' href='apple-touch-icon-72x72.png' />
        <link rel='apple-touch-icon-precomposed' sizes='144x144' href='apple-touch-icon-144x144.png' />
        <link rel='apple-touch-icon-precomposed' sizes='60x60' href='apple-touch-icon-60x60.png' />
        <link rel='apple-touch-icon-precomposed' sizes='120x120' href='apple-touch-icon-120x120.png' />
        <link rel='apple-touch-icon-precomposed' sizes='76x76' href='apple-touch-icon-76x76.png' />
        <link rel='apple-touch-icon-precomposed' sizes='152x152' href='apple-touch-icon-152x152.png' />
        <link rel='icon' type='image/png' href='favicon-196x196.png' sizes='196x196' />
        <link rel='icon' type='image/png' href='favicon-96x96.png' sizes='96x96' />
        <link rel='icon' type='image/png' href='favicon-32x32.png' sizes='32x32' />
        <link rel='icon' type='image/png' href='favicon-16x16.png' sizes='16x16' />
        <link rel='icon' type='image/png' href='favicon-128.png' sizes='128x128' />
        <meta name='application-name' content='axs' />
        <meta name='msapplication-TileColor' content='#FFFFFF' />
        <meta name='msapplication-TileImage' content='mstile-144x144.png' />
        <meta name='msapplication-square70x70logo' content='mstile-70x70.png' />
        <meta name='msapplication-square150x150logo' content='mstile-150x150.png' />
        <meta name='msapplication-wide310x150logo' content='mstile-310x150.png' />
        <meta name='msapplication-square310x310logo' content='mstile-310x310.png' />

        {/* Other */}
        <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=no' />
        <link rel='canonical' href={`https://www.${domain}/`}></link>

        {/* Indexing */}
        {/* <meta name='robots' content='noindex' /> */}
        <meta name='robots' content='follow, index' />

        {/* Scripts */}
        <Script src={`https://www.google.com/recaptcha/api.js`} />
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`} strategy='afterInteractive' />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTAG_ID}');
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
