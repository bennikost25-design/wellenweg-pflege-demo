import type { Metadata } from "next";
import Link from "next/link";
import { ButtonLink } from "@/components/button-link";
import { metadataContent } from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: metadataContent.notFound.title,
  description: metadataContent.notFound.description,
  path: "/404",
});

export default function NotFound() {
  return (
    <main
      id="hauptinhalt"
      className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-4 py-20 text-center"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute left-1/2 top-16 h-32 w-[120%] -translate-x-1/2 opacity-40"
          viewBox="0 0 800 120"
          fill="none"
        >
          <path
            d="M0 70c80-50 160-50 240 0s160 50 240 0 160-50 240 0"
            stroke="#12A8B8"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M0 95c80-40 160-40 240 0s160 40 240 0 160-40 240 0"
            stroke="#E85D4C"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
      </div>

      <p className="relative font-display text-sm font-bold uppercase tracking-wide text-brand-dark">
        404
      </p>
      <h1 className="relative mt-3 max-w-xl font-display text-3xl font-extrabold text-ink sm:text-4xl">
        Dieser Weg führt gerade nicht zur gewünschten Seite.
      </h1>
      <p className="relative mt-4 max-w-lg text-lg text-ink-muted">
        Die Adresse existiert nicht oder wurde verschoben. Wählen Sie einen der Wege
        zurück zur Website.
      </p>
      <div className="relative mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
        <ButtonLink href="/" variant="primary">
          Zurück zur Startseite
        </ButtonLink>
        <ButtonLink href="/leistungen" variant="secondary">
          Leistungen ansehen
        </ButtonLink>
        <ButtonLink href="/kontakt" variant="ghost">
          Kontakt öffnen
        </ButtonLink>
      </div>
      <p className="relative mt-8 text-sm text-ink-muted">
        Oder direkt zur{" "}
        <Link href="/" className="font-semibold text-brand-dark hover:underline">
          Startseite
        </Link>
        .
      </p>
    </main>
  );
}
