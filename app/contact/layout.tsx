import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Contact Addis Tech in Addis Ababa for custom software, AI, ERP, and digital transformation projects. We respond to technical inquiries within 24 hours.',
  path: '/contact',
  keywords: ['contact Addis Tech', 'software quote Ethiopia', 'hire developers Addis Ababa'],
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
