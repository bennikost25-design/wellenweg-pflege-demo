"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties, ReactNode } from "react";

export type RevealVariant =
  | "slide-left"
  | "slide-right"
  | "scale-in"
  | "wave-rise"
  | "fade-soft";

type RevealProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "li";
  variant?: RevealVariant;
  delay?: number;
  /** When true, animate out when leaving the viewport and replay on re-entry. */
  replay?: boolean;
};

function hasFocusWithin(node: Element) {
  const active = document.activeElement;
  return Boolean(active && (active === node || node.contains(active)));
}

export function Reveal({
  children,
  className = "",
  as: Tag = "div",
  variant = "wave-rise",
  delay = 0,
  replay = false,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || typeof IntersectionObserver === "undefined") {
      node.classList.add("is-visible");
      return;
    }

    node.classList.add("reveal-ready", `reveal-${variant}`);
    if (delay > 0) {
      node.style.setProperty("--reveal-delay", `${delay}ms`);
    }

    if (!replay) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.12, rootMargin: "0px 0px -36px 0px" },
      );

      observer.observe(node);
      return () => observer.disconnect();
    }

    const SHOW_AT = 0.18;
    const HIDE_AT = 0.06;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;

          if (ratio >= SHOW_AT) {
            node.classList.remove("is-reversing");
            node.classList.add("is-visible");
            return;
          }

          if (ratio <= HIDE_AT) {
            if (hasFocusWithin(node)) return;
            node.classList.add("is-reversing");
            node.classList.remove("is-visible");
          }
        });
      },
      { threshold: [0, HIDE_AT, SHOW_AT] },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [variant, delay, replay]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={
        delay > 0
          ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
          : undefined
      }
    >
      {children}
    </Tag>
  );
}
