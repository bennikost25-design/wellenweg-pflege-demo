import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "accent" | "ghost";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent-dark text-white hover:bg-[#a83c2f] shadow-[0_8px_20px_-10px_rgba(201,72,56,0.75)]",
  secondary:
    "bg-brand-dark text-white hover:bg-[#086570] shadow-[0_8px_20px_-10px_rgba(11,127,140,0.6)]",
  accent:
    "bg-highlight text-ink hover:bg-highlight-strong shadow-[0_8px_20px_-10px_rgba(240,196,46,0.55)]",
  ghost:
    "bg-surface text-ink border-2 border-ink/15 hover:border-brand-dark hover:text-brand-dark",
};

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  external?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
}: ButtonLinkProps) {
  const classes = `inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-base font-semibold transition-colors ${variants[variant]} ${className}`;

  if (href.startsWith("tel:") || href.startsWith("mailto:") || external) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
