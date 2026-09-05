import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  noIndex?: boolean;
};

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
  noIndex = false,
}: PageSeo): Metadata {
  const normalizedPath =
    path === "" ? "/" : path.startsWith("/") ? path : `/${path}`;
  const url = `${siteConfig.url}${normalizedPath === "/" ? "/" : normalizedPath}`;
  const fullTitle =
    normalizedPath === "/" ? siteConfig.title : `${title} | ${siteConfig.name}`;

  const ogImage = {
    url: siteConfig.ogImage.path,
    width: siteConfig.ogImage.width,
    height: siteConfig.ogImage.height,
    alt: siteConfig.ogImage.alt,
  };

  return {
    title: fullTitle,
    description,
    applicationName: siteConfig.name,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.legalName,
    category: "technology",
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    icons: {
      icon: [{ url: siteConfig.icon, type: "image/svg+xml" }],
      shortcut: siteConfig.icon,
      apple: [
        { url: siteConfig.ogImage.path, sizes: "180x180", type: "image/png" },
      ],
    },
    manifest: "/manifest.webmanifest",
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: siteConfig.twitterHandle,
      site: siteConfig.twitterHandle,
      images: [siteConfig.ogImage.path],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
    other: {
      "geo.region": "ET-AA",
      "geo.placename": siteConfig.address.city,
    },
  };
}

/** Organization + WebSite JSON-LD for the home page. */
export function getOrganizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.name,
        legalName: siteConfig.legalName,
        url: siteConfig.url,
        logo: {
          "@type": "ImageObject",
          url: `${siteConfig.url}${siteConfig.icon}`,
        },
        image: `${siteConfig.url}${siteConfig.ogImage.path}`,
        email: siteConfig.email,
        telephone: siteConfig.phone,
        foundingDate: String(siteConfig.foundedYear),
        identifier: siteConfig.registrationNumber,
        address: {
          "@type": "PostalAddress",
          streetAddress: siteConfig.address.street,
          addressLocality: siteConfig.address.city,
          addressCountry: siteConfig.address.countryCode,
        },
        contactPoint: {
          "@type": "ContactPoint",
          telephone: siteConfig.phone,
          email: siteConfig.email,
          contactType: "customer service",
          areaServed: "ET",
          availableLanguage: ["English", "Amharic"],
        },
        ...(siteConfig.sameAs.length > 0
          ? { sameAs: [...siteConfig.sameAs] }
          : {}),
      },
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: siteConfig.name,
        description: siteConfig.description,
        publisher: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en",
      },
      {
        "@type": "WebPage",
        "@id": `${siteConfig.url}/#webpage`,
        url: siteConfig.url,
        name: siteConfig.title,
        description: siteConfig.description,
        isPartOf: { "@id": `${siteConfig.url}/#website` },
        about: { "@id": `${siteConfig.url}/#organization` },
        inLanguage: "en",
      },
    ],
  };
}
