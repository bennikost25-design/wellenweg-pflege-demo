import type { Metadata } from "next";
import { Check, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import {
  contact,
  metadataContent,
  services,
  servicesPage,
} from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: metadataContent.leistungen.title,
  description: metadataContent.leistungen.description,
  path: "/leistungen",
});

export default function LeistungenPage() {
  const serviceMap = Object.fromEntries(services.map((s) => [s.id, s]));

  return (
    <main id="hauptinhalt">
      <section className="relative overflow-hidden bg-gradient-to-br from-surface-soft via-background to-[#fff4ef] py-12 sm:py-16">
        <div className="pointer-events-none absolute -right-10 top-8 h-40 w-40 rounded-full bg-brand/20 blur-2xl" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-dark">
            Leistungen
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            {servicesPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-ink-muted">{servicesPage.intro}</p>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
        aria-labelledby="need-heading"
      >
        <h2
          id="need-heading"
          className="font-display text-3xl font-extrabold text-ink"
        >
          Auswahl nach Unterstützungsbedarf
        </h2>
        <p className="mt-3 max-w-2xl text-lg text-ink-muted">
          Wählen Sie die Situation, die am besten passt – darunter finden Sie die
          zugehörigen Leistungen.
        </p>

        <div className="mt-8 space-y-8">
          {servicesPage.needGroups.map((group, index) => (
            <Reveal key={group.id}>
              <article
                className={`rounded-[1.75rem] border border-border p-5 sm:p-7 ${
                  index % 2 === 0 ? "bg-surface" : "bg-surface-soft/70"
                }`}
              >
                <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
                  <div>
                    <span className="inline-flex rounded-full bg-brand/15 px-3 py-1 text-sm font-bold text-brand-dark">
                      Bedarf {index + 1}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-extrabold text-ink">
                      {group.title}
                    </h3>
                    <p className="mt-2 text-ink-muted">{group.description}</p>
                  </div>
                  <ul className="space-y-3">
                    {group.serviceIds.map((id) => {
                      const service = serviceMap[id];
                      if (!service) return null;
                      return (
                        <li
                          key={id}
                          className="rounded-2xl border border-border/80 bg-surface px-4 py-3"
                        >
                          <p className="font-display text-lg font-bold text-ink">
                            {service.title}
                          </p>
                          <p className="mt-1 text-ink-muted">{service.text}</p>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="bg-ink py-12 text-white"
        aria-labelledby="all-services-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="all-services-heading"
            className="font-display text-3xl font-extrabold"
          >
            Alle Leistungen im Überblick
          </h2>
          <p className="mt-3 max-w-2xl text-white/80">
            Bis zu acht Leistungen – verständlich erklärt und gemeinsam auf einer Seite.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <li
                key={service.id}
                className={`rounded-2xl border border-white/15 p-4 ${
                  index % 3 === 0
                    ? "bg-white/8"
                    : index % 3 === 1
                      ? "bg-brand/25"
                      : "bg-accent/20"
                }`}
              >
                <div className="flex gap-3">
                  <Check
                    className="mt-1 size-5 shrink-0 text-highlight"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-display text-lg font-bold">{service.title}</h3>
                    <p className="mt-1 text-white/80">{service.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
        aria-labelledby="funding-heading"
      >
        <div className="rounded-[1.75rem] border-2 border-brand/30 bg-surface-soft p-6 sm:p-8">
          <h2
            id="funding-heading"
            className="font-display text-3xl font-extrabold text-ink"
          >
            {servicesPage.funding.title}
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-ink-muted">
            {servicesPage.funding.text}
          </p>
          <p className="mt-4 text-sm font-medium text-ink-muted">
            Keine Rechts- oder Kostenberatung – nur eine erste Orientierung.
          </p>
        </div>
      </section>

      <section className="border-t border-border bg-surface py-12">
        <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
          <h2 className="font-display text-3xl font-extrabold text-ink">
            Unsicher, welche Leistung passt?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-ink-muted">
            Rufen Sie uns an. Gemeinsam ordnen wir Ihre Situation ein – ohne Formular und
            ohne Verpflichtung.
          </p>
          <a
            href={contact.phoneHref}
            className="mt-6 inline-flex items-center justify-center gap-3 font-display text-3xl font-extrabold text-accent-dark hover:text-accent sm:text-4xl"
          >
            <Phone className="size-8" aria-hidden="true" />
            {contact.phoneDisplay}
          </a>
          <div className="mt-6 flex justify-center">
            <ButtonLink href={contact.phoneHref} variant="primary">
              Jetzt anrufen
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
