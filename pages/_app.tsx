import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Script from 'next/script';
import 'styles/_main.scss';

import { Layout } from 'layout';

const GTAG_ID = process.env.NEXT_PUBLIC_GTAG;

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`} strategy='afterInteractive' />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GTAG_ID}');
        `}
      </Script>
      <ThemeProvider defaultTheme='dark'>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
