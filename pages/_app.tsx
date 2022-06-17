import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import 'styles/main.scss';

import { Layout } from 'layout';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider defaultTheme='system'>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
