'use client';

import React from 'react';
import { ThemeProvider } from '@/context/ThemeContext';
import '@/lib/i18n'; // Force i18n initialization on client side

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}
