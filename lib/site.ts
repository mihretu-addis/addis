const DEFAULT_SITE_URL = "https://addistech.com";

function resolveSiteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  try {
    return new URL(raw).origin;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

export const siteConfig = {
  name: "Addis Tech",
  legalName: "Addis Tech Software PLC",
  title: "Addis Tech | Software Engineering, AI & ERP Solutions",
  description:
    "Founded in 2021 in Addis Ababa, Addis Tech transforms complex business visions into scalable, market-ready technology — custom software, AI automation, Odoo ERP, and platforms like Novas Booking.",
  tagline: "Engineering High-Performance Digital Solutions",
  url: resolveSiteUrl(),
  locale: "en_US",
  email: "info@addistechplc.com",
  phone: "+251911505992",
  address: {
    city: "Addis Ababa",
    country: "Ethiopia",
  },
  /** Addis Tech mark — used for Open Graph / Twitter cards */
  ogImage: {
    path: "/logo-2.png",
    width: 1333,
    height: 1333,
    alt: "Addis Tech Logo",
  },
  keywords: [
    "Addis Tech",
    "software development Ethiopia",
    "Addis Ababa tech company",
    "custom software",
    "mobile app development",
    "Odoo ERP Ethiopia",
    "AI integration",
    "Novas Booking",
    "hotel booking platform",
  ],
  twitterHandle: "@addistech",
} as const;
