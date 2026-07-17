import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import {
  contact,
  footerNav,
  siteConfig,
} from "@/content/site-content";

export function SiteFooter() {
  return (
    <footer className="mt-auto w-full max-w-full overflow-x-clip border-t border-border bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-3 py-12 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="inline-flex rounded-lg focus-visible:outline-offset-4"
            aria-label="Wellenweg Pflege – zur Startseite"
          >
            <span className="inline-flex items-center gap-2.5">
              <svg
                width="40"
                height="40"
                viewBox="0 0 48 48"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <rect width="48" height="48" rx="14" fill="#12A8B8" />
                <path
                  d="M10 30c4.5-7 8.5-7 13 0s8.5 7 13 0"
                  stroke="#F5F8FA"
                  strokeWidth="3.2"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M10 21c4.5-7 8.5-7 13 0s8.5 7 13 0"
                  stroke="#F0C42E"
                  strokeWidth="2.6"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
              <span className="font-display text-lg font-extrabold tracking-tight">
                Wellenweg Pflege
              </span>
            </span>
          </Link>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/80">
            {siteConfig.claim}
          </p>
          <p className="mt-4 text-sm text-white/65">{siteConfig.demoNotice}</p>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-highlight">
            Navigation
          </h2>
          <ul className="mt-3 space-y-1">
            {footerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="inline-flex min-h-10 items-center text-base text-white/90 hover:text-highlight"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="font-display text-sm font-bold uppercase tracking-wider text-highlight">
            Erreichbarkeit
          </h2>
          <ul className="mt-3 space-y-3 text-base text-white/90">
            <li>
              <a
                href={contact.phoneHref}
                className="inline-flex min-h-10 items-center gap-2 hover:text-highlight"
              >
                <Phone className="size-4 shrink-0" aria-hidden="true" />
                {contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={contact.emailHref}
                className="inline-flex min-h-10 items-center gap-2 break-all hover:text-highlight"
              >
                <Mail className="size-4 shrink-0" aria-hidden="true" />
                {contact.email}
              </a>
            </li>
            <li className="text-white/75">
              {contact.hours.label}
              <br />
              {contact.hours.time}
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="mx-auto max-w-6xl px-4 py-4 text-sm text-white/60 sm:px-6">
          © {new Date().getFullYear()} {siteConfig.legalName} · Fiktive Demo
        </p>
      </div>
    </footer>
  );
}
