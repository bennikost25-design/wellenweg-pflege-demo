import { Mail, Phone } from "lucide-react";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { contact, homeContactClose } from "@/content/site-content";

export function ContactClose() {
  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-brand-dark to-[#086570] py-16 text-white"
      aria-labelledby="contact-close-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute -right-10 top-0 h-full w-[55%] opacity-30 wave-drift"
          viewBox="0 0 400 400"
          fill="none"
        >
          <path
            d="M0 120c60-70 120-70 180 0s120 70 180 0v280H0z"
            fill="#0C2D4A"
          />
          <path
            d="M20 200c50-50 100-50 150 0s100 50 150 0"
            stroke="#F0C42E"
            strokeWidth="10"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="wave-rise">
          <div className="max-w-3xl">
            <h2
              id="contact-close-heading"
              className="font-display text-3xl font-extrabold text-white sm:text-4xl"
            >
              {homeContactClose.title}
            </h2>
            <p className="mt-4 text-lg text-white/90">{homeContactClose.text}</p>
          </div>
        </Reveal>

        <Reveal variant="fade-soft" delay={100}>
          <a
            href={contact.phoneHref}
            className="mt-6 inline-flex items-center gap-3 font-display text-3xl font-extrabold tracking-tight text-white hover:text-highlight sm:text-4xl"
          >
            <Phone className="size-8 shrink-0" aria-hidden="true" />
            <span className="break-all sm:break-normal">{contact.phoneDisplay}</span>
          </a>
        </Reveal>

        <Reveal variant="slide-right" delay={180}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href={contact.phoneHref} variant="primary">
              Direkt anrufen
            </ButtonLink>
            <a
              href={contact.emailHref}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border-2 border-white/80 bg-transparent px-5 py-2.5 text-base font-semibold text-white hover:bg-white/15"
            >
              <Mail className="size-5" aria-hidden="true" />
              E-Mail schreiben
            </a>
            <ButtonLink href="/kontakt" variant="accent">
              Kontaktseite öffnen
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
