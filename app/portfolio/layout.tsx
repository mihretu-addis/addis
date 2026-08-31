import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Portfolio',
  description:
    'Featured projects by Addis Tech including Novas Booking — a next-gen hotel and travel booking platform — plus logistics, ERP, and enterprise web systems.',
  path: '/portfolio',
  keywords: ['Novas Booking', 'hotel booking platform', 'portfolio', 'case studies'],
});

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
