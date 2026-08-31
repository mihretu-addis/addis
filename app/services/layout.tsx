import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Services',
  description:
    'Custom software, mobile apps, AI implementation, Odoo ERP deployment, and digital automation — engineered by Addis Tech in Addis Ababa, Ethiopia.',
  path: '/services',
  keywords: ['software services Ethiopia', 'Odoo ERP', 'AI implementation', 'mobile development'],
});

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
