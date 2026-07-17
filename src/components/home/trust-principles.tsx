import { Reveal } from "@/components/reveal";
import { principles } from "@/content/site-content";

export function TrustPrinciples() {
  return (
    <section
      className="mx-auto max-w-6xl px-4 py-14 sm:px-6"
      aria-labelledby="principles-heading"
    >
      <Reveal>
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-dark">
            Unser Weg
          </p>
          <h2
            id="principles-heading"
            className="mt-2 font-display text-3xl font-extrabold text-ink sm:text-4xl"
          >
            Drei Prinzipien statt großer Versprechen
          </h2>
        </div>
      </Reveal>

      <div className="relative mt-10 overflow-hidden rounded-[2rem] bg-ink px-5 py-8 text-white sm:px-8 sm:py-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          aria-hidden="true"
        >
          <svg className="h-full w-full" viewBox="0 0 800 240" preserveAspectRatio="none">
            <path
              d="M0 140c80-60 160-60 240 0s160 60 240 0 160-60 240 0 160 60 240 0"
              stroke="#12A8B8"
              strokeWidth="18"
              fill="none"
            />
          </svg>
        </div>

        <ol className="relative grid gap-6 md:grid-cols-3 md:gap-0">
          {principles.map((item, index) => (
            <li
              key={item.title}
              className={`relative md:px-6 ${
                index < principles.length - 1
                  ? "md:border-r md:border-white/15"
                  : ""
              }`}
            >
              <Reveal>
                <div
                  className={`rounded-2xl bg-white/8 p-4 backdrop-blur-sm ${
                    index === 1 ? "md:-translate-y-2" : ""
                  } ${index === 2 ? "md:translate-y-2" : ""}`}
                >
                  <span className="font-display text-sm font-bold text-highlight">
                    0{index + 1}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-extrabold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-base text-white/80">{item.text}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
