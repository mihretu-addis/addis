export const siteConfig = {
  name: 'Addis Tech',
  legalName: 'Addis Tech Software PLC',
  title: 'Addis Tech | Software Engineering, AI & ERP Solutions',
  description:
    'Addis Tech — premier software development firm in Addis Ababa, Ethiopia. Custom web & mobile apps, AI integration, Odoo ERP, and platforms like Novas Booking.',
  tagline: 'Engineering High-Performance Digital Solutions',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://addistech.com',
  locale: 'en_US',
  email: 'info@addistechplc.com',
  phone: '+251-11-XXX-XXXX',
  address: {
    city: 'Addis Ababa',
    country: 'Ethiopia',
  },
  keywords: [
    'Addis Tech',
    'software development Ethiopia',
    'Addis Ababa tech company',
    'custom software',
    'mobile app development',
    'Odoo ERP Ethiopia',
    'AI integration',
    'Novas Booking',
    'hotel booking platform',
  ],
  twitterHandle: '@addistech',
} as const;
