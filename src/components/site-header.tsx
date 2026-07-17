"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useId, useRef, useState } from "react";
import { Logo } from "@/components/logo";
import { contact, navigation } from "@/content/site-content";

function getFocusable(container: HTMLElement) {
  return Array.from(
    container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    ),
  ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional reset on navigation
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const panel = panelRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const firstLink = panel?.querySelector<HTMLElement>("a");
    firstLink?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusable = getFocusable(panel);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 w-full max-w-full border-b border-border/80 bg-surface/95 backdrop-blur-md transition-[padding,box-shadow] ${
        compact ? "shadow-sm" : ""
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6 ${
          compact ? "py-2.5" : "py-3.5"
        }`}
      >
        <Link
          href="/"
          className="flex min-w-0 shrink rounded-lg focus-visible:outline-offset-4"
          aria-label="Wellenweg Pflege – zur Startseite"
        >
          <Logo compact={compact} />
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Hauptnavigation"
        >
          <ul className="flex items-center gap-1">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`inline-flex min-h-11 items-center rounded-full px-4 text-base font-semibold transition-colors ${
                    isActive(item.href)
                      ? "bg-surface-soft text-brand-dark"
                      : "text-ink-muted hover:bg-surface-soft hover:text-ink"
                  }`}
                  aria-current={isActive(item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={contact.phoneHref}
            className="ml-3 inline-flex min-h-11 items-center gap-2 rounded-full bg-accent-dark px-4 text-base font-bold text-white transition-colors hover:bg-[#a83c2f]"
          >
            <Phone className="size-4 shrink-0" aria-hidden="true" />
            <span className="whitespace-nowrap">{contact.phoneDisplay}</span>
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2 lg:hidden">
          <a
            href={contact.phoneHref}
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-full bg-accent-dark text-white hover:bg-[#a83c2f]"
            aria-label={`Anrufen: ${contact.phoneDisplay}`}
          >
            <Phone className="size-5" aria-hidden="true" />
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 shrink-0 items-center gap-1.5 rounded-full border-2 border-ink/15 bg-surface px-2.5 text-sm font-semibold text-ink sm:gap-2 sm:px-3.5"
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? (
              <X className="size-5 shrink-0" aria-hidden="true" />
            ) : (
              <Menu className="size-5 shrink-0" aria-hidden="true" />
            )}
            <span className="hidden min-[360px]:inline">
              {open ? "Schließen" : "Menü"}
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id={menuId}
          ref={panelRef}
          className="w-full max-w-full border-t border-border bg-surface lg:hidden"
        >
          <nav
            aria-label="Mobile Navigation"
            className="mx-auto max-w-6xl px-3 py-4 sm:px-6"
          >
            <ul className="flex flex-col gap-1">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex min-h-12 items-center rounded-xl px-4 text-lg font-semibold ${
                      isActive(item.href)
                        ? "bg-surface-soft text-brand-dark"
                        : "text-ink hover:bg-surface-soft"
                    }`}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href={contact.phoneHref}
              className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent-dark px-4 text-lg font-bold text-white hover:bg-[#a83c2f]"
            >
              <Phone className="size-5 shrink-0" aria-hidden="true" />
              <span className="break-all">{contact.phoneDisplay}</span>
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
