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
  const size = compact ? 36 : 44;

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
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
            className={`font-display font-extrabold tracking-tight text-ink ${
              compact ? "text-base" : "text-lg"
            }`}
          >
            Wellenweg Pflege
          </span>
          {!compact ? (
            <span className="text-xs font-medium text-ink-muted sm:text-sm">
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
