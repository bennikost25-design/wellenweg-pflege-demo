import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import type { RevealVariant } from "@/components/reveal";
import { lifeSituations } from "@/content/site-content";

const panelStyles = [
  "bg-brand-dark text-white",
  "bg-accent-dark text-white lg:order-2",
  "bg-ink text-white",
] as const;

const variants: RevealVariant[] = ["slide-left", "slide-right", "slide-left"];

export function LifeSituations() {
  return (
    <section
      id="situationen"
      className="scroll-mt-32 bg-surface-soft/60 py-14"
      aria-labelledby="situations-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="fade-soft">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wide text-accent-dark">
              Unterstützung nach Lebenssituation
            </p>
            <h2
              id="situations-heading"
              className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl"
            >
              Welche Situation beschreibt Sie gerade am besten?
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              Statt Fachbegriffen starten wir bei dem, was sich im Alltag verändert hat.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 space-y-6">
          {lifeSituations.map((situation, index) => (
            <Reveal
              key={situation.id}
              variant={variants[index] ?? "slide-left"}
              delay={index * 80}
            >
              <article
                id={situation.id}
                className={`scroll-mt-32 grid gap-5 overflow-hidden rounded-[1.75rem] border border-border bg-surface p-5 sm:p-7 lg:grid-cols-[0.9fr_1.1fr] ${
                  index === 1 ? "lg:grid-cols-[1.1fr_0.9fr]" : ""
                }`}
              >
                <div className={`${panelStyles[index]} rounded-2xl p-5 sm:p-6`}>
                  <span className="text-sm font-bold uppercase tracking-wide text-white/90">
                    Situation {index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-2xl font-extrabold leading-snug text-white">
                    {situation.title}
                  </h3>
                </div>
                <div className={index === 1 ? "lg:order-1" : ""}>
                  <p className="font-semibold text-ink">Passende Unterstützung</p>
                  <ul className="mt-3 space-y-2.5">
                    {situation.support.map((item) => (
                      <li key={item} className="flex gap-2.5 text-ink-muted">
                        <Check
                          className="mt-1 size-5 shrink-0 text-brand-dark"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/leistungen"
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-brand-dark px-5 py-2.5 font-semibold text-white hover:bg-[#086570]"
          >
            Alle Leistungen ansehen
            <ArrowRight className="size-5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
