import type { Metadata, Viewport } from "next";
import { Nunito, Source_Sans_3 } from "next/font/google";
import { DemoBanner } from "@/components/demo-banner";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SkipLink } from "@/components/skip-link";
import { metadataContent, siteConfig } from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  ...createPageMetadata({
    title: metadataContent.home.title,
    description: metadataContent.home.description,
    path: "/",
  }),
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${nunito.variable} ${sourceSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-ink">
        <div className="flex min-h-full w-full max-w-full flex-1 flex-col overflow-x-clip">
          <SkipLink />
          <DemoBanner />
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
