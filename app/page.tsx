import type { Metadata } from "next";

import AddisTech from "@/components/AddisTech";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: siteConfig.title,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "Addis Tech home",
    "East Africa software engineering",
    "digital solutions Addis Ababa",
  ],
});

export default function HomePage() {
  return (
    <div className="w-full min-h-full">
      <AddisTech />
    </div>
  );
}
