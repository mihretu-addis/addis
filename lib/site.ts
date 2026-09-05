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
    "Founded in 2021 in Addis Ababa, Addis Tech transforms complex business visions into scalable, market-ready technology — custom software, AI automation, Odoo ERP, and digital platforms for East Africa.",
  tagline: "Engineering High-Performance Digital Solutions",
  url: resolveSiteUrl(),
  locale: "en_US",
  email: "info@addistechplc.com",
  phone: "+251911505992",
  registrationNumber: "3432/2013",
  foundedYear: 2021,
  themeColor: "#1B1464",
  address: {
    street: "Bole District",
    city: "Addis Ababa",
    country: "Ethiopia",
    countryCode: "ET",
  },
  /** Favicon / app icon (SVG mark) */
  icon: "/logo.svg",
  /** Open Graph / Twitter share image */
  ogImage: {
    path: "/logo-2.png",
    width: 1333,
    height: 1333,
    alt: "Addis Tech Logo",
  },
  keywords: [
    "Addis Tech",
    "Addis Tech Software PLC",
    "software development Ethiopia",
    "Addis Ababa tech company",
    "custom software development",
    "mobile app development Ethiopia",
    "Odoo ERP Ethiopia",
    "AI automation East Africa",
    "digital transformation Ethiopia",
    "web application development",
    "enterprise software Addis Ababa",
    "high-performance digital solutions",
  ],
  sameAs: [
    // Add live profile URLs when available
  ] as string[],
  twitterHandle: "@addistech",
} as const;
