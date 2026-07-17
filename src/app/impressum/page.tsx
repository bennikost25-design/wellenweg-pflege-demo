import type { Metadata } from "next";
import {
  contact,
  metadataContent,
  siteConfig,
} from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: metadataContent.impressum.title,
  description: metadataContent.impressum.description,
  path: "/impressum",
});

export default function ImpressumPage() {
  return (
    <main id="hauptinhalt" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="rounded-xl border border-highlight-strong/50 bg-[#fff9e6] px-4 py-3 text-sm font-semibold text-ink">
        {siteConfig.legalPlaceholder}
      </p>
      <h1 className="mt-6 font-display text-4xl font-extrabold text-ink">
        Impressum
      </h1>
      <p className="mt-4 text-ink-muted">
        Angaben für die fiktive Demo-Website „{siteConfig.name}“. Alle Daten sind
        beispielhaft und gehören zu keinem realen Unternehmen.
      </p>

      <section className="mt-8 space-y-2">
        <h2 className="font-display text-2xl font-bold text-ink">Anbieter (fiktiv)</h2>
        <p>
          {siteConfig.legalName}
          <br />
          {siteConfig.tagline}
          <br />
          {contact.address.street}
          <br />
          {contact.address.zip} {contact.address.city}
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="font-display text-2xl font-bold text-ink">Kontakt (Demo)</h2>
        <p>
          Telefon:{" "}
          <a href={contact.phoneHref} className="font-semibold text-brand-dark hover:underline">
            {contact.phoneDisplay}
          </a>
          <br />
          E-Mail:{" "}
          <a href={contact.emailHref} className="font-semibold text-brand-dark hover:underline">
            {contact.email}
          </a>
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="font-display text-2xl font-bold text-ink">Hinweis</h2>
        <p className="text-ink-muted">
          Dieses Impressum dient ausschließlich der Gestaltung einer Demo-Website. Es
          ersetzt keine gesetzlich erforderlichen Angaben eines realen Anbieters und ist
          keine rechtssichere Vorlage.
        </p>
      </section>
    </main>
  );
}
