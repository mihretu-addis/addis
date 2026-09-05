import "./globals.css";

import type { Metadata } from "next";
import { Outfit } from "next/font/google";

import { ClearStaleServiceWorker } from "@/components/clear-stale-sw";

export const metadata: Metadata = {
  title: "Novas Landing – Your Gateway to Digital Innovation",
  description:
    "Novas Landing provides cutting-edge digital solutions and innovative technology services to help businesses transform and succeed in the modern digital landscape.",
  keywords: [
    "Novas Landing",
    "digital innovation",
    "technology solutions",
    "business transformation",
    "digital services",
    "innovation platform",
    "modern technology",
    "business solutions",
    "digital growth",
  ],
  openGraph: {
    title: "Novas Landing – Your Gateway to Digital Innovation",
    description:
      "Discover innovative digital solutions with Novas Landing. Transform your business with cutting-edge technology and modern digital services.",
    url: "https://novaslanding.com/",
    siteName: "Novas Landing",
    images: [
      {
        url: "http://localhost:3000/logo.png",
        width: 1200,
        height: 630,
        alt: "Novas Landing Logo",
      },
    ],
    type: "website",
  },
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
  return (
    <html
      lang="en"
      className={`${outfit.variable} font-sans`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans" suppressHydrationWarning>
        <ClearStaleServiceWorker />
        {children}
      </body>
    </html>
  );
}
