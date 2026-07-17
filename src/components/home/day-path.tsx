"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/reveal";
import type { RevealVariant } from "@/components/reveal";
import { dayPath } from "@/content/site-content";

const stationVariants: RevealVariant[] = ["slide-left", "scale-in", "slide-right"];

export function DayPath() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const solidRef = useRef<SVGPathElement | null>(null);
  const dashedRef = useRef<SVGPathElement | null>(null);
  const mobileTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const solid = solidRef.current;
    const dashed = dashedRef.current;

    const revealPaths = () => {
      if (solid) {
        solid.style.strokeDashoffset = "0";
        solid.classList.add("is-drawn");
      }
      if (dashed) {
        dashed.style.opacity = "0.9";
        dashed.classList.add("is-drawn");
      }
      mobileTrackRef.current?.classList.add("is-drawn");
    };

    if (reduced || typeof IntersectionObserver === "undefined") {
      revealPaths();
      return;
    }

    if (solid) {
      const length = solid.getTotalLength();
      solid.style.strokeDasharray = `${length}`;
      solid.style.strokeDashoffset = `${length}`;
      solid.classList.add("draw-path");
    }

    if (dashed) {
      dashed.style.opacity = "0";
      dashed.style.transition = "opacity 0.7s cubic-bezier(0.22, 1, 0.36, 1) 0.35s";
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealPaths();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      aria-labelledby="daypath-heading"
    >
      <Reveal variant="fade-soft">
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

      <div ref={sectionRef}>
        {/* Mobile */}
        <ol className="relative mt-10 space-y-5 md:hidden">
          <div
            ref={mobileTrackRef}
            className="absolute bottom-6 left-5 top-6 w-1 -translate-x-1/2 origin-top scale-y-100 rounded-full bg-gradient-to-b from-brand-dark via-accent-dark to-highlight-strong"
            aria-hidden="true"
          />
          {dayPath.stations.map((station, index) => (
            <li key={station.time} className="relative pl-12">
              <span
                className="absolute left-0 top-2 z-10 flex size-10 items-center justify-center rounded-full border-4 border-background bg-brand-dark font-display text-sm font-bold text-white"
                aria-hidden="true"
              >
                {index + 1}
              </span>
              <Reveal variant={stationVariants[index]} delay={80 + index * 90}>
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

        {/* Desktop */}
        <div className="relative mt-14 hidden md:block">
          <div className="relative min-h-[24rem]">
            <svg
              className="pointer-events-none absolute inset-x-0 top-[4.6rem] h-40 w-full overflow-visible"
              viewBox="0 0 1000 160"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                ref={solidRef}
                d="M90 42 C 250 4, 330 4, 500 86 S 760 148, 910 52"
                stroke="#0B7F8C"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                ref={dashedRef}
                d="M90 42 C 250 4, 330 4, 500 86 S 760 148, 910 52"
                stroke="#C94838"
                strokeWidth="2.5"
                strokeDasharray="8 10"
                strokeLinecap="round"
                fill="none"
                opacity="0.9"
              />
            </svg>

            <ol className="relative grid grid-cols-3 gap-5">
              {dayPath.stations.map((station, index) => {
                const markerTop =
                  index === 0
                    ? "top-[3.1rem]"
                    : index === 1
                      ? "top-[6.55rem]"
                      : "top-[3.85rem]";
                const cardPad =
                  index === 0 ? "pt-[7.5rem]" : index === 1 ? "pt-[11rem]" : "pt-[8.25rem]";

                return (
                  <li key={station.time} className={`relative ${cardPad}`}>
                    <span
                      className={`absolute left-1/2 z-20 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand-dark font-display text-base font-bold text-white ring-[5px] ring-background shadow-md ${markerTop}`}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <Reveal variant={stationVariants[index]} delay={160 + index * 110}>
                      <article className="rounded-[1.5rem] border border-border bg-surface p-5 shadow-[0_16px_40px_-28px_rgba(12,45,74,0.45)]">
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
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
