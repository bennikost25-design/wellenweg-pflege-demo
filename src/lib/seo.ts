import type { Metadata } from "next";
import { siteConfig } from "@/content/site-content";

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const url = `${siteConfig.baseUrl}${path}`;

  return {
    title,
    description,
    metadataBase: new URL(siteConfig.baseUrl),
    alternates: {
      canonical: url,
    },
    robots: {
      index: false,
      follow: false,
      googleBot: {
        index: false,
        follow: false,
      },
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "de_DE",
      type: "website",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
