import type {Metadata} from 'next';
import './globals.css'; // Global styles
import { Providers } from './Providers';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Addis Tech | Software Engineering, AI & ERP Solutions',
  description: 'Founded in 2021 in Addis Ababa, Addis Tech is a premier software development firm dedicated to engineering high-performance custom software, AI integration, and Odoo ERP transformation.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-blue-500/30 dark:bg-neutral-950 transition-colors duration-300 text-slate-800 dark:text-neutral-50" suppressHydrationWarning>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
