"use client";

import { useEffect, useRef } from "react";
import { Reveal } from "@/components/reveal";
import { serviceAreaNote, serviceAreas, siteConfig } from "@/content/site-content";

type Area = (typeof serviceAreas)[number];

const positions: Record<Area, { x: number; y: number }> = {
  "Erfurt-Mitte": { x: 180, y: 150 },
  Andreasvorstadt: { x: 78, y: 88 },
  Johannesvorstadt: { x: 282, y: 88 },
  Ilversgehofen: { x: 88, y: 228 },
  "Erfurt-Nord": { x: 272, y: 228 },
};

function AreaLabel({
  area,
  x,
  y,
  isCenter,
}: {
  area: Area;
  x: number;
  y: number;
  isCenter: boolean;
}) {
  const labelY = isCenter ? y + 40 : y > 160 ? y + 32 : y - 22;
  const fontSize = isCenter ? 15 : 13;

  if (area === "Andreasvorstadt" || area === "Johannesvorstadt") {
    const [first, second] =
      area === "Andreasvorstadt"
        ? ["Andreas-", "vorstadt"]
        : ["Johannes-", "vorstadt"];
    return (
      <text
        x={x}
        y={labelY - 8}
        textAnchor="middle"
        fill="#0C2D4A"
        style={{
          fontSize,
          fontWeight: 700,
          fontFamily: "var(--font-nunito), sans-serif",
        }}
      >
        <tspan x={x} dy="0">
          {first}
        </tspan>
        <tspan x={x} dy="15">
          {second}
        </tspan>
      </text>
    );
  }

  return (
    <text
      x={x}
      y={labelY}
      textAnchor="middle"
      fill="#0C2D4A"
      style={{
        fontSize,
        fontWeight: isCenter ? 800 : 700,
        fontFamily: "var(--font-nunito), sans-serif",
      }}
    >
      {area}
    </text>
  );
}

export function ServiceArea() {
  const mapRef = useRef<HTMLElement | null>(null);
  const lineRefs = useRef<(SVGLineElement | null)[]>([]);
  const markerRefs = useRef<(SVGGElement | null)[]>([]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lines = lineRefs.current.filter(Boolean) as SVGLineElement[];
    const markers = markerRefs.current.filter(Boolean) as SVGGElement[];

    const showAll = () => {
      lines.forEach((line) => {
        line.style.strokeDashoffset = "0";
        line.classList.add("is-drawn");
      });
      markers.forEach((marker) => marker.classList.add("is-visible"));
    };

    if (reduced || typeof IntersectionObserver === "undefined") {
      showAll();
      return;
    }

    lines.forEach((line) => {
      const length = line.getTotalLength();
      line.style.strokeDasharray = `${length}`;
      line.style.strokeDashoffset = `${length}`;
      line.classList.add("draw-path");
    });

    markers.forEach((marker, index) => {
      marker.classList.add("marker-pop", "is-armed");
      marker.style.setProperty("--reveal-delay", `${220 + index * 90}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            showAll();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.25 },
    );

    observer.observe(map);
    return () => observer.disconnect();
  }, []);

  const outerAreas = serviceAreas.filter((area) => area !== "Erfurt-Mitte");

  return (
    <section
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      aria-labelledby="area-heading"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal variant="slide-left">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-accent-dark">
              Einsatzgebiet
            </p>
            <h2
              id="area-heading"
              className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl"
            >
              Nah bei Ihnen in {siteConfig.city}
            </h2>
            <p className="mt-3 text-lg text-ink-muted">
              Wir versorgen Menschen in ausgewählten Stadtteilen rund um Erfurt-Mitte.
              Die Darstellung ist schematisch und keine geografisch exakte Karte.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <li
                  key={area}
                  className="rounded-full border border-border bg-surface px-3.5 py-2 text-sm font-semibold text-ink"
                >
                  {area}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-2xl border-l-4 border-brand-dark bg-surface-soft px-4 py-3 text-base text-ink">
              {serviceAreaNote}
            </p>
          </div>
        </Reveal>

        <Reveal variant="scale-in" delay={80}>
          <figure
            ref={mapRef as never}
            className="overflow-hidden rounded-[1.75rem] border border-border bg-gradient-to-br from-surface-soft to-[#dff3f6] p-3 sm:p-6"
          >
            <svg
              viewBox="0 0 360 310"
              className="mx-auto h-auto w-full max-w-full"
              role="img"
              aria-labelledby="area-map-title area-map-desc"
            >
              <title id="area-map-title">Schematische Darstellung des Einsatzgebiets</title>
              <desc id="area-map-desc">
                Erfurt-Mitte steht im Zentrum. Verbunden sind Andreasvorstadt,
                Johannesvorstadt, Ilversgehofen und Erfurt-Nord.
              </desc>

              <rect x="8" y="8" width="344" height="294" rx="28" fill="#F5F8FA" />
              <path
                d="M36 96c40-30 70-20 100 10s70 35 100 5 70-25 90 5"
                stroke="#12A8B8"
                strokeWidth="10"
                opacity="0.16"
                fill="none"
              />

              {outerAreas.map((area, index) => {
                const from = positions["Erfurt-Mitte"];
                const to = positions[area];
                return (
                  <line
                    key={`line-${area}`}
                    ref={(el) => {
                      lineRefs.current[index] = el;
                    }}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="#0B7F8C"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    opacity="0.7"
                  />
                );
              })}

              {serviceAreas.map((area, index) => {
                const pos = positions[area];
                const isCenter = area === "Erfurt-Mitte";
                return (
                  <g
                    key={area}
                    ref={(el) => {
                      markerRefs.current[index] = el;
                    }}
                  >
                    {isCenter ? (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="26"
                        fill="#C94838"
                        opacity="0.18"
                      />
                    ) : null}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isCenter ? 18 : 12}
                      fill={isCenter ? "#C94838" : "#0B7F8C"}
                    />
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isCenter ? 8 : 5}
                      fill="#F5F8FA"
                    />
                    <AreaLabel
                      area={area}
                      x={pos.x}
                      y={pos.y}
                      isCenter={isCenter}
                    />
                  </g>
                );
              })}
            </svg>
            <figcaption className="mt-3 text-center text-sm font-medium text-ink-muted">
              Schematische Darstellung – keine exakte Stadtkarte
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
