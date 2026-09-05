import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: "AddisTech",
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: siteConfig.themeColor,
    lang: "en",
    icons: [
      {
        src: siteConfig.icon,
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
      {
        src: siteConfig.ogImage.path,
        sizes: "1333x1333",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
