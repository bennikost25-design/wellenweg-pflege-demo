import type { Metadata } from "next";
import { CalendarClock, Mail, MapPin, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import {
  contact,
  contactPage,
  metadataContent,
  serviceAreas,
} from "@/content/site-content";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: metadataContent.kontakt.title,
  description: metadataContent.kontakt.description,
  path: "/kontakt",
});

const pathwayStyles = [
  "border-accent bg-[#fff4f1]",
  "border-brand bg-surface-soft",
  "border-highlight-strong bg-[#fff9e6]",
] as const;

const pathwayIcons = [Phone, Mail, CalendarClock];

export default function KontaktPage() {
  return (
    <main id="hauptinhalt">
      <section className="bg-gradient-to-br from-ink to-brand-dark py-12 text-white sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-wide text-highlight">
            Kontakt
          </p>
          <h1 className="mt-2 max-w-3xl font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
            {contactPage.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-white/85">{contactPage.intro}</p>
          <a
            href={contact.phoneHref}
            className="mt-8 inline-flex items-center gap-3 font-display text-4xl font-extrabold tracking-tight text-highlight hover:text-white sm:text-5xl"
          >
            <Phone className="size-9 shrink-0" aria-hidden="true" />
            <span className="break-all sm:break-normal">{contact.phoneDisplay}</span>
          </a>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
        aria-labelledby="pathways-heading"
      >
        <h2
          id="pathways-heading"
          className="font-display text-3xl font-extrabold text-ink"
        >
          Drei Wege zu uns
        </h2>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {contactPage.pathways.map((pathway, index) => {
            const Icon = pathwayIcons[index] ?? Phone;
            return (
              <article
                key={pathway.id}
                className={`flex flex-col rounded-[1.5rem] border-2 p-5 ${pathwayStyles[index]}`}
              >
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-ink text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-2xl font-extrabold text-ink">
                  {pathway.title}
                </h3>
                <p className="mt-2 flex-1 text-ink-muted">{pathway.text}</p>
                <ButtonLink
                  href={pathway.href}
                  variant={index === 0 ? "primary" : index === 1 ? "secondary" : "ghost"}
                  className="mt-5"
                >
                  {pathway.actionLabel}
                </ButtonLink>
              </article>
            );
          })}
        </div>
        <p className="mt-4 text-sm text-ink-muted">
          Termine werden telefonisch abgestimmt – es gibt kein Online-Buchungssystem.
        </p>
      </section>

      <section className="bg-surface-soft/70 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-2">
          <div className="rounded-[1.5rem] border border-border bg-surface p-6">
            <h2 className="font-display text-2xl font-extrabold text-ink">
              Direkte Kontaktdaten
            </h2>
            <ul className="mt-5 space-y-4 text-lg">
              <li>
                <a
                  href={contact.phoneHref}
                  className="inline-flex min-h-11 items-center gap-2 font-semibold text-accent-dark hover:underline"
                >
                  <Phone className="size-5" aria-hidden="true" />
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.emailHref}
                  className="inline-flex min-h-11 items-center gap-2 break-all font-semibold text-brand-dark hover:underline"
                >
                  <Mail className="size-5 shrink-0" aria-hidden="true" />
                  {contact.email}
                </a>
              </li>
              <li className="flex gap-2 text-ink-muted">
                <MapPin className="mt-1 size-5 shrink-0 text-ink" aria-hidden="true" />
                <span>
                  {contact.address.street}
                  <br />
                  {contact.address.zip} {contact.address.city}
                </span>
              </li>
              <li className="text-ink-muted">
                <strong className="text-ink">Erreichbarkeit:</strong>
                <br />
                {contact.hours.label}, {contact.hours.time}
              </li>
            </ul>
          </div>

          <div className="rounded-[1.5rem] border border-border bg-surface p-6">
            <h2 className="font-display text-2xl font-extrabold text-ink">
              Einsatzgebiet
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full bg-surface-soft px-3.5 py-2 text-sm font-semibold text-ink"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-ink-muted">
              Wohnen Sie knapp außerhalb? Rufen Sie uns trotzdem an – wir prüfen gemeinsam,
              was möglich ist.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6"
        aria-labelledby="process-heading"
      >
        <h2
          id="process-heading"
          className="font-display text-3xl font-extrabold text-ink"
        >
          {contactPage.process.title}
        </h2>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2">
          {contactPage.process.steps.map((step, index) => (
            <li
              key={step}
              className="flex gap-3 rounded-2xl border border-border bg-surface p-4"
            >
              <span
                className="flex size-10 shrink-0 items-center justify-center rounded-full bg-brand font-display font-bold text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <p className="text-ink-muted">{step}</p>
            </li>
          ))}
        </ol>
      </section>

      <section
        className="border-t border-border bg-surface py-12"
        aria-labelledby="first-call-heading"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2
            id="first-call-heading"
            className="font-display text-3xl font-extrabold text-ink"
          >
            {contactPage.firstCall.title}
          </h2>
          <p className="mt-3 max-w-2xl rounded-2xl border-l-4 border-highlight bg-[#fff9e6] px-4 py-3 text-lg font-semibold text-ink">
            {contactPage.firstCall.note}
          </p>
          <ul className="mt-6 space-y-3">
            {contactPage.firstCall.prompts.map((prompt) => (
              <li
                key={prompt}
                className="rounded-xl border border-border bg-background px-4 py-3 text-ink-muted"
              >
                {prompt}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href={contact.phoneHref} variant="primary">
              Erstgespräch telefonisch starten
            </ButtonLink>
          </div>
        </div>
      </section>
    </main>
  );
}
