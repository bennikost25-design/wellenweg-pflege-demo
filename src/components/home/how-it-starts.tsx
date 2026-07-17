import { Reveal } from "@/components/reveal";
import type { RevealVariant } from "@/components/reveal";
import { startSteps } from "@/content/site-content";

const variants: RevealVariant[] = [
  "slide-left",
  "slide-right",
  "slide-left",
  "slide-right",
];

export function HowItStarts() {
  return (
    <section
      className="overflow-x-clip bg-gradient-to-b from-background to-surface-soft/80 py-14"
      aria-labelledby="steps-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal variant="fade-soft">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-wide text-brand-dark">
              So beginnt die Unterstützung
            </p>
            <h2
              id="steps-heading"
              className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl"
            >
              Vier Schritte – wie in einer klaren Übersicht
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              Kein komplizierter Prozess. Eine verständliche Reihenfolge, die Sie jederzeit
              nachvollziehen können.
            </p>
          </div>
        </Reveal>

        <div className="mt-10 overflow-hidden rounded-[1.75rem] border-2 border-ink/10 bg-surface shadow-[0_20px_50px_-35px_rgba(12,45,74,0.5)]">
          <div className="border-b border-border bg-surface-soft px-5 py-3 sm:px-6">
            <p className="font-display text-sm font-bold text-ink-muted">
              Beratungsübersicht · Wellenweg Pflege
            </p>
          </div>
          <ol className="grid md:grid-cols-2">
            {startSteps.map((item, index) => (
              <li
                key={item.step}
                className={`step-panel border-border p-5 sm:p-6 ${
                  index % 2 === 0 ? "md:border-r" : ""
                } ${index < 2 ? "border-b" : ""} ${
                  index === 1 || index === 2 ? "bg-[#fcfdfe]" : "bg-surface"
                }`}
              >
                <Reveal variant={variants[index]} delay={index * 90} replay>
                  <div className="flex gap-4">
                    <span
                      className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-dark font-display text-lg font-extrabold text-white"
                      aria-hidden="true"
                    >
                      {item.step}
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-extrabold text-ink">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-ink-muted">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
