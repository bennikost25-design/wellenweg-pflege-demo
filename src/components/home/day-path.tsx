import { Reveal } from "@/components/reveal";
import { dayPath } from "@/content/site-content";

export function DayPath() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      aria-labelledby="daypath-heading"
    >
      <Reveal>
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-dark">
            Exemplarischer Tagesweg
          </p>
          <h2
            id="daypath-heading"
            className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl"
          >
            Ein Tag mit ambulanter Unterstützung
          </h2>
          <p className="mt-3 text-lg text-ink-muted">{dayPath.intro}</p>
        </div>
      </Reveal>

      {/* Mobile: stacked vertical path */}
      <ol className="relative mt-10 space-y-5 md:hidden">
        <div
          className="absolute bottom-4 left-[1.15rem] top-4 w-1 rounded-full bg-gradient-to-b from-brand via-accent to-highlight"
          aria-hidden="true"
        />
        {dayPath.stations.map((station, index) => (
          <li key={station.time} className="relative pl-12">
            <span
              className="absolute left-0 top-2 flex size-10 items-center justify-center rounded-full border-4 border-surface bg-brand font-display text-sm font-bold text-white"
              aria-hidden="true"
            >
              {index + 1}
            </span>
            <Reveal>
              <article className="rounded-2xl border border-border bg-surface p-4">
                <p className="font-display text-sm font-bold text-accent-dark">
                  {station.time}
                </p>
                <h3 className="mt-1 font-display text-xl font-extrabold text-ink">
                  {station.title}
                </h3>
                <p className="mt-2 text-ink-muted">{station.text}</p>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>

      {/* Desktop: curved wave path */}
      <div className="relative mt-12 hidden md:block">
        <svg
          className="absolute inset-x-0 top-[4.5rem] h-28 w-full"
          viewBox="0 0 1000 120"
          fill="none"
          aria-hidden="true"
          preserveAspectRatio="none"
        >
          <path
            d="M40 70 C 180 10, 320 10, 500 70 S 820 130, 960 55"
            stroke="#12A8B8"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M40 70 C 180 10, 320 10, 500 70 S 820 130, 960 55"
            stroke="#E85D4C"
            strokeWidth="2.5"
            strokeDasharray="8 10"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>

        <ol className="relative grid grid-cols-3 gap-6 pt-2">
          {dayPath.stations.map((station, index) => (
            <li
              key={station.time}
              className={`${index === 1 ? "mt-16" : index === 2 ? "mt-6" : "mt-0"}`}
            >
              <Reveal>
                <article className="rounded-[1.5rem] border border-border bg-surface p-5 shadow-[0_16px_40px_-28px_rgba(12,45,74,0.45)]">
                  <div className="mb-3 flex items-center gap-3">
                    <span
                      className="flex size-11 items-center justify-center rounded-full bg-brand font-display text-base font-bold text-white ring-4 ring-surface-soft"
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <p className="font-display text-sm font-bold text-accent-dark">
                      {station.time}
                    </p>
                  </div>
                  <h3 className="font-display text-xl font-extrabold text-ink">
                    {station.title}
                  </h3>
                  <p className="mt-2 text-ink-muted">{station.text}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
