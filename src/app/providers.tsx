'use client';

import { ThemeProvider } from 'next-themes';

import { Wrapper } from '@/types';

export const Providers = ({ children }: Wrapper) => {
  return <ThemeProvider defaultTheme='dark'>{children}</ThemeProvider>;
};
