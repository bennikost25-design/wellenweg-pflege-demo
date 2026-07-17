import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${siteConfig.name} (Demo)`,
    short_name: "Wellenweg",
    description: siteConfig.claim,
    start_url: "/",
    display: "browser",
    background_color: "#F5F8FA",
    theme_color: "#12A8B8",
    lang: "de",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
        purpose: "any",
      },
    ],
  };
}
