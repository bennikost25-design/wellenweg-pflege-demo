import type { Metadata } from "next";
import { ContactClose } from "@/components/home/contact-close";
import { DayPath } from "@/components/home/day-path";
import { HomeHero } from "@/components/home/home-hero";
import { HowItStarts } from "@/components/home/how-it-starts";
import { LifeSituations } from "@/components/home/life-situations";
import { ServiceArea } from "@/components/home/service-area";
import { TrustPrinciples } from "@/components/home/trust-principles";
import { metadataContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: metadataContent.home.title,
  description: metadataContent.home.description,
  path: "/",
});

export default function HomePage() {
  return (
    <main id="hauptinhalt">
      <HomeHero />
      <TrustPrinciples />
      <LifeSituations />
      <DayPath />
      <HowItStarts />
      <ServiceArea />
      <ContactClose />
    </main>
  );
}
