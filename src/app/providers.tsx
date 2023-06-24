'use client';

import { ThemeProvider } from 'next-themes';

export const Providers = ({ children }: Wrapper) => {
  return <ThemeProvider enableSystem={false}>{children}</ThemeProvider>;
};
