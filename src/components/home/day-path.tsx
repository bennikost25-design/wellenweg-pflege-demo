"use client";

import { useEffect, useMemo, useRef } from "react";
import { Reveal } from "@/components/reveal";
import type { RevealVariant } from "@/components/reveal";
import { dayPath } from "@/content/site-content";

const stationVariants: RevealVariant[] = ["slide-left", "scale-in", "slide-right"];

/** Shared SVG coordinate system for desktop path + markers */
const DESKTOP_SVG = { width: 1000, height: 160 } as const;

/**
 * Marker centers in SVG space (= column centers of a 3-col grid).
 * Path, markers and cards all derive from these values.
 */
const desktopStations = [
  { x: DESKTOP_SVG.width / 6, y: 42, cardPad: 96 },
  { x: DESKTOP_SVG.width / 2, y: 108, cardPad: 162 },
  { x: (DESKTOP_SVG.width * 5) / 6, y: 48, cardPad: 102 },
] as const;

const DESKTOP_MARKER_RADIUS = 24; // size-12 / 2

function buildWavePath(
  points: readonly { x: number; y: number }[],
): string {
  const [a, b, c] = points;
  const c1x = a.x + (b.x - a.x) * 0.45;
  const c2x = b.x - (b.x - a.x) * 0.45;
  const c3x = b.x + (c.x - b.x) * 0.45;
  const c4x = c.x - (c.x - b.x) * 0.45;

  return [
    `M ${a.x} ${a.y}`,
    `C ${c1x} ${a.y}, ${c2x} ${b.y}, ${b.x} ${b.y}`,
    `C ${c3x} ${b.y}, ${c4x} ${c.y}, ${c.x} ${c.y}`,
  ].join(" ");
}

const mobileLinkColors = [
  "from-brand-dark to-accent-dark",
  "from-accent-dark to-highlight-strong",
] as const;

export function DayPath() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const solidRef = useRef<SVGPathElement | null>(null);
  const dashedRef = useRef<SVGPathElement | null>(null);
  const mobileLinkRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const wavePath = useMemo(() => buildWavePath(desktopStations), []);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const solid = solidRef.current;
    const dashed = dashedRef.current;
    const mobileLinks = mobileLinkRefs.current.filter(Boolean) as HTMLSpanElement[];

    const revealAll = () => {
      if (solid) {
        solid.style.strokeDashoffset = "0";
        solid.classList.add("is-drawn");
      }
      if (dashed) {
        dashed.style.opacity = "0.9";
        dashed.classList.add("is-visible");
      }
      mobileLinks.forEach((link) => link.classList.add("is-grown"));
    };

    if (reduced || typeof IntersectionObserver === "undefined") {
      revealAll();
      return;
    }

    if (solid) {
      const length = solid.getTotalLength();
      solid.style.strokeDasharray = `${length}`;
      solid.style.strokeDashoffset = `${length}`;
      solid.classList.add("draw-path");
    }

    if (dashed) {
      dashed.classList.add("daypath-dash-ready");
    }

    mobileLinks.forEach((link, index) => {
      link.classList.add("is-armed");
      link.style.setProperty("--link-delay", `${index * 160}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealAll();
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
        {/* Mobile: only <li> children; connectors live inside each station */}
        <ol className="relative mt-10 space-y-5 md:hidden">
          {dayPath.stations.map((station, index) => {
            const isLast = index === dayPath.stations.length - 1;

            return (
              <li key={station.time} className="relative pl-12">
                {!isLast ? (
                  <span
                    ref={(el) => {
                      mobileLinkRefs.current[index] = el;
                    }}
                    className={`daypath-mobile-link bg-gradient-to-b ${mobileLinkColors[index] ?? "from-brand-dark to-accent-dark"}`}
                    aria-hidden="true"
                  />
                ) : null}

                <span
                  className="absolute left-0 top-2 z-10 flex size-10 items-center justify-center rounded-full border-4 border-background bg-brand-dark font-display text-sm font-bold text-white"
                  aria-hidden="true"
                >
                  {index + 1}
                </span>

                <Reveal
                  variant={stationVariants[index]}
                  delay={80 + index * 90}
                  replay
                >
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
            );
          })}
        </ol>

        {/* Desktop: path + markers from shared station coordinates */}
        <div className="relative mt-14 hidden md:block">
          <div className="relative" style={{ minHeight: DESKTOP_SVG.height + 200 }}>
            <svg
              className="pointer-events-none absolute inset-x-0 top-0 w-full overflow-visible"
              style={{ height: DESKTOP_SVG.height }}
              viewBox={`0 0 ${DESKTOP_SVG.width} ${DESKTOP_SVG.height}`}
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                ref={solidRef}
                d={wavePath}
                stroke="#0B7F8C"
                strokeWidth="6"
                strokeLinecap="round"
                fill="none"
              />
              <path
                ref={dashedRef}
                d={wavePath}
                stroke="#C94838"
                strokeWidth="2.5"
                strokeDasharray="8 10"
                strokeLinecap="round"
                fill="none"
                opacity="0.9"
              />
            </svg>

            <ol className="relative grid grid-cols-3 gap-0">
              {dayPath.stations.map((station, index) => {
                const point = desktopStations[index];

                return (
                  <li
                    key={station.time}
                    className="relative px-2.5"
                    style={{ paddingTop: point.cardPad }}
                  >
                    <span
                      className="absolute left-1/2 z-20 flex size-12 -translate-x-1/2 items-center justify-center rounded-full bg-brand-dark font-display text-base font-bold text-white ring-[5px] ring-background shadow-md"
                      style={{
                        top: point.y - DESKTOP_MARKER_RADIUS,
                      }}
                      aria-hidden="true"
                    >
                      {index + 1}
                    </span>
                    <Reveal
                      variant={stationVariants[index]}
                      delay={160 + index * 110}
                      replay
                    >
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
