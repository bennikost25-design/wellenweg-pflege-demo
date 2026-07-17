"use client";

import Link from "next/link";
import { ArrowRight, Clock3, MapPin, MessageCircle } from "lucide-react";
import type { MouseEvent } from "react";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import { homeHero } from "@/content/site-content";

const accentStyles = {
  brand: "border-brand bg-surface-soft text-brand-dark",
  accent: "border-accent/40 bg-[#fff4f1] text-accent-dark",
  highlight: "border-highlight-strong/60 bg-[#fff9e6] text-ink",
} as const;

const chipIcons = [Clock3, MapPin, MessageCircle];

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, "");
  const target = document.getElementById(id);
  if (!target) return;

  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
  window.history.pushState(null, "", `#${id}`);
}

export function HomeHero() {
  const handleHashClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    event.preventDefault();
    scrollToHash(href);
  };

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-br from-surface-soft via-background to-[#fff6ef]"
      aria-labelledby="home-hero-heading"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute -left-16 top-8 h-48 w-72 opacity-40 wave-float"
          viewBox="0 0 320 160"
          fill="none"
        >
          <path
            d="M0 90c40-50 80-50 120 0s80 50 120 0 80-50 120 0"
            stroke="#12A8B8"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M0 120c40-40 80-40 120 0s80 40 120 0 80-40 120 0"
            stroke="#E85D4C"
            strokeWidth="8"
            strokeLinecap="round"
            opacity="0.55"
          />
        </svg>
        <div className="absolute right-[-4rem] top-20 h-56 w-56 rounded-full bg-brand/15 blur-2xl" />
        <div className="absolute bottom-10 left-1/3 h-40 w-40 rounded-full bg-accent/10 blur-2xl" />
        <div className="absolute right-16 bottom-24 h-20 w-20 rotate-12 rounded-2xl bg-highlight/50" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-16">
        <Reveal variant="fade-soft" delay={40}>
          <div className="max-w-xl">
            <p className="inline-flex rounded-full bg-brand/15 px-3 py-1 text-sm font-bold uppercase tracking-wide text-brand-dark">
              {homeHero.eyebrow}
            </p>
            <h1
              id="home-hero-heading"
              className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]"
            >
              {homeHero.title}
            </h1>
            <p className="mt-5 text-lg text-ink-muted">{homeHero.intro}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <ButtonLink href={homeHero.primaryCta.href} variant="primary">
                {homeHero.primaryCta.label}
              </ButtonLink>
              <ButtonLink href={homeHero.secondaryCta.href} variant="ghost">
                {homeHero.secondaryCta.label}
              </ButtonLink>
            </div>
            <ul className="mt-8 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
              {homeHero.chips.map((chip, index) => {
                const Icon = chipIcons[index] ?? Clock3;
                return (
                  <li
                    key={chip}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border bg-surface/80 px-3.5 text-sm font-semibold text-ink"
                  >
                    <Icon className="size-4 text-brand-dark" aria-hidden="true" />
                    {chip}
                  </li>
                );
              })}
            </ul>
          </div>
        </Reveal>

        <div className="relative" aria-label="Was brauchen Sie gerade?">
          <p className="mb-4 font-display text-lg font-bold text-ink">
            Was brauchen Sie gerade?
          </p>
          <ol className="relative flex flex-col gap-4">
            <svg
              className="pointer-events-none absolute left-5 top-8 hidden h-[calc(100%-4rem)] w-8 md:block"
              viewBox="0 0 32 220"
              fill="none"
              aria-hidden="true"
              preserveAspectRatio="none"
            >
              <path
                d="M16 0c0 40 12 40 0 80s-12 40 0 80 12 40 0 60"
                stroke="#12A8B8"
                strokeWidth="3"
                strokeDasharray="6 8"
                strokeLinecap="round"
              />
            </svg>

            {homeHero.entries.map((entry, index) => {
              const isHash = entry.href.startsWith("#");
              const linkClass =
                "inline-flex items-start gap-2 rounded-md hover:underline";

              return (
                <Reveal
                  key={entry.id}
                  as="li"
                  variant="slide-right"
                  delay={80 + index * 100}
                  replay
                  className={`relative rounded-2xl border-2 p-4 shadow-[0_12px_30px_-18px_rgba(12,45,74,0.35)] sm:p-5 ${
                    accentStyles[entry.accent]
                  } ${index === 1 ? "md:ml-8" : ""} ${index === 2 ? "md:ml-4" : ""}`}
                >
                  <span
                    className="mb-2 inline-flex size-8 items-center justify-center rounded-full bg-ink font-display text-sm font-bold text-white"
                    aria-hidden="true"
                  >
                    {index + 1}
                  </span>
                  <h2 className="font-display text-xl font-extrabold text-ink">
                    {isHash ? (
                      <a
                        href={entry.href}
                        className={linkClass}
                        onClick={(event) => handleHashClick(event, entry.href)}
                      >
                        {entry.title}
                        <ArrowRight
                          className="mt-1 size-5 shrink-0 opacity-70"
                          aria-hidden="true"
                        />
                      </a>
                    ) : (
                      <Link href={entry.href} className={linkClass}>
                        {entry.title}
                        <ArrowRight
                          className="mt-1 size-5 shrink-0 opacity-70"
                          aria-hidden="true"
                        />
                      </Link>
                    )}
                  </h2>
                  <p className="mt-2 text-base text-ink-muted">{entry.text}</p>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>

      <div className="relative h-10 w-full overflow-hidden" aria-hidden="true">
        <svg
          className="absolute bottom-0 left-0 h-10 w-[200%] max-w-none"
          viewBox="0 0 1440 40"
          preserveAspectRatio="none"
        >
          <path
            d="M0 20c120 20 240-20 360 0s240 20 360 0 240-20 360 0 240 20 360 0v20H0z"
            fill="#F5F8FA"
          />
        </svg>
      </div>
    </section>
  );
}
