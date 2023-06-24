import Script from 'next/script';

export const Scripts = () => {
  return (
    <>
      <Script src={`https://www.google.com/recaptcha/api.js`} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GTAG}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${process.env.NEXT_PUBLIC_GTAG}');`}
      </Script>
    </>
  );
};
