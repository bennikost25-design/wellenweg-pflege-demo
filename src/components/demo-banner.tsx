import { siteConfig } from "@/content/site-content";

export function DemoBanner() {
  return (
    <div className="border-b border-border/70 bg-highlight/35 text-ink">
      <p className="mx-auto max-w-6xl px-4 py-2 text-center text-sm font-medium leading-snug sm:px-6">
        {siteConfig.demoNotice}
      </p>
    </div>
  );
}
