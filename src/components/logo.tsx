type LogoProps = {
  className?: string;
  showWordmark?: boolean;
  compact?: boolean;
};

export function Logo({
  className = "",
  showWordmark = true,
  compact = false,
}: LogoProps) {
  return (
    <span
      className={`inline-flex min-w-0 max-w-full items-center gap-2 sm:gap-2.5 ${className}`}
    >
      <svg
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className={`shrink-0 ${
          compact ? "size-9" : "size-9 sm:size-11"
        }`}
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
          opacity="0.95"
        />
      </svg>
      {showWordmark ? (
        <span className="flex min-w-0 flex-col leading-tight">
          <span
            className={`block truncate font-display font-extrabold tracking-tight text-ink ${
              compact ? "text-base" : "text-base sm:text-lg"
            }`}
          >
            Wellenweg Pflege
          </span>
          {!compact ? (
            <span className="hidden text-xs font-medium text-ink-muted sm:block sm:text-sm">
              Ambulanter Pflegedienst
            </span>
          ) : null}
        </span>
      ) : (
        <span className="sr-only">Wellenweg Pflege</span>
      )}
    </span>
  );
}
