import { Reveal } from "@/components/reveal";
import { serviceAreaNote, serviceAreas, siteConfig } from "@/content/site-content";

const positions: Record<(typeof serviceAreas)[number], { x: number; y: number }> = {
  "Erfurt-Mitte": { x: 180, y: 145 },
  Andreasvorstadt: { x: 95, y: 95 },
  Johannesvorstadt: { x: 265, y: 95 },
  Ilversgehofen: { x: 105, y: 205 },
  "Erfurt-Nord": { x: 255, y: 200 },
};

export function ServiceArea() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      aria-labelledby="area-heading"
    >
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
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
            <p className="mt-6 rounded-2xl border-l-4 border-brand bg-surface-soft px-4 py-3 text-base text-ink">
              {serviceAreaNote}
            </p>
          </div>
        </Reveal>

        <Reveal>
          <figure className="overflow-hidden rounded-[1.75rem] border border-border bg-gradient-to-br from-surface-soft to-[#dff3f6] p-4 sm:p-6">
            <svg
              viewBox="0 0 360 300"
              className="h-auto w-full"
              role="img"
              aria-labelledby="area-map-title area-map-desc"
            >
              <title id="area-map-title">Schematische Darstellung des Einsatzgebiets</title>
              <desc id="area-map-desc">
                Erfurt-Mitte steht im Zentrum. Verbunden sind Andreasvorstadt,
                Johannesvorstadt, Ilversgehofen und Erfurt-Nord.
              </desc>

              <rect x="12" y="12" width="336" height="276" rx="28" fill="#F5F8FA" />
              <path
                d="M40 90c40-30 70-20 100 10s70 35 100 5 70-25 90 5"
                stroke="#12A8B8"
                strokeWidth="10"
                opacity="0.18"
                fill="none"
              />

              {serviceAreas.map((area) => {
                if (area === "Erfurt-Mitte") return null;
                const from = positions["Erfurt-Mitte"];
                const to = positions[area];
                return (
                  <line
                    key={`line-${area}`}
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="#0B7F8C"
                    strokeWidth="2"
                    strokeDasharray="5 6"
                    opacity="0.55"
                  />
                );
              })}

              {serviceAreas.map((area) => {
                const pos = positions[area];
                const isCenter = area === "Erfurt-Mitte";
                return (
                  <g key={area}>
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isCenter ? 18 : 11}
                      fill={isCenter ? "#E85D4C" : "#12A8B8"}
                    />
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isCenter ? 8 : 4.5}
                      fill="#F5F8FA"
                    />
                    <text
                      x={pos.x}
                      y={pos.y + (isCenter ? 36 : pos.y > 160 ? 28 : -18)}
                      textAnchor="middle"
                      className="fill-ink"
                      style={{
                        fontSize: isCenter ? 14 : 12,
                        fontWeight: 700,
                        fontFamily: "var(--font-nunito), sans-serif",
                      }}
                    >
                      {area}
                    </text>
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
