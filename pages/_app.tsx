import type { NextPage } from 'next';
import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';
import 'styles/main.scss';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <ThemeProvider defaultTheme='system' attribute='class'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
