import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Why Choose Us',
  description:
    'Partner with Addis Tech for agile delivery, scalable architecture, bank-grade security, and local East African insight with global engineering standards.',
  path: '/why-us',
  keywords: ['why Addis Tech', 'software partner Ethiopia', 'tech company Addis Ababa'],
});

export default function WhyUsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
