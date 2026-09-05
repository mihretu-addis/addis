import "./globals.css";

import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";

import { ClearStaleServiceWorker } from "@/components/clear-stale-sw";
import { createPageMetadata, getOrganizationJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
});

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = getOrganizationJsonLd();

  return (
    <html
      lang="en"
      className={`${outfit.variable} font-sans`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-sans" suppressHydrationWarning>
        <ClearStaleServiceWorker />
        {children}
      </body>
    </html>
  );
}
