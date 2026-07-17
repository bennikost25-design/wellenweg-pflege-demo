import type { Metadata } from "next";
import { metadataContent, siteConfig } from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: metadataContent.datenschutz.title,
  description: metadataContent.datenschutz.description,
  path: "/datenschutz",
});

export default function DatenschutzPage() {
  return (
    <main id="hauptinhalt" className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
      <p className="rounded-xl border border-highlight-strong/50 bg-[#fff9e6] px-4 py-3 text-sm font-semibold text-ink">
        {siteConfig.legalPlaceholder}
      </p>
      <h1 className="mt-6 font-display text-4xl font-extrabold text-ink">
        Datenschutz
      </h1>
      <p className="mt-4 text-ink-muted">
        Diese Hinweise beschreiben den Umgang mit Daten auf der fiktiven Demo-Website
        „{siteConfig.name}“. Sie sind kein vollständiges Datenschutzkonzept und keine
        rechtssichere Vorlage.
      </p>

      <section className="mt-8 space-y-2">
        <h2 className="font-display text-2xl font-bold text-ink">
          1. Verantwortliche Stelle (Demo)
        </h2>
        <p className="text-ink-muted">
          Für diese Demo wird kein reales Unternehmen betrieben. Kontaktdaten auf der
          Website sind fiktiv und dienen nur der Darstellung.
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="font-display text-2xl font-bold text-ink">
          2. Kein Kontaktformular
        </h2>
        <p className="text-ink-muted">
          Diese Demo enthält kein Kontaktformular und kein Bewerbungsformular. Es werden
          daher keine Formulardaten über die Website erhoben.
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="font-display text-2xl font-bold text-ink">
          3. Keine Analyse- oder Trackingdienste
        </h2>
        <p className="text-ink-muted">
          In dieser Demo werden keine Analysewerkzeuge, Werbe-Tracker oder ähnlichen
          Dienste eingesetzt. Es findet kein Nutzertracking über die Website statt.
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="font-display text-2xl font-bold text-ink">4. Hosting und Logs</h2>
        <p className="text-ink-muted">
          Beim Aufruf einer Website können technisch bedingt Verbindungsdaten (zum
          Beispiel IP-Adresse, Zeitpunkt, aufgerufene Seite) in Server-Logs entstehen.
          Art und Dauer der Speicherung hängen vom jeweiligen Hostinganbieter ab.
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="font-display text-2xl font-bold text-ink">5. Externe Links</h2>
        <p className="text-ink-muted">
          Telefon- und E-Mail-Links öffnen Programme auf Ihrem Gerät. Für deren
          Datenschutzbestimmungen gelten die Regeln der jeweiligen Anbieter.
        </p>
      </section>

      <section className="mt-8 space-y-2">
        <h2 className="font-display text-2xl font-bold text-ink">6. Hinweis zum Demo-Charakter</h2>
        <p className="text-ink-muted">
          Diese Datenschutzerklärung ist ein Platzhalter für eine fiktive Darstellung.
          Für ein reales Unternehmen wäre eine individuelle, rechtlich geprüfte
          Datenschutzerklärung erforderlich.
        </p>
      </section>
    </main>
  );
}
