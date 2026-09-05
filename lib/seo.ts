import type { Metadata } from "next";
import { siteConfig } from "./site";

type PageSeo = {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
};

export function createPageMetadata({
  title,
  description,
  path = "",
  keywords = [],
}: PageSeo): Metadata {
  const url = `${siteConfig.url}${path}`;
  const fullTitle =
    path === "" || path === "/"
      ? siteConfig.title
      : `${title} | ${siteConfig.name}`;

  return {
    title: fullTitle,
    description,
    keywords: [...siteConfig.keywords, ...keywords],
    authors: [{ name: siteConfig.legalName, url: siteConfig.url }],
    creator: siteConfig.name,
    publisher: siteConfig.legalName,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: siteConfig.twitterHandle,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}
