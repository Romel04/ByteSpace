type LogoProps = { tone?: "light" | "dark"; className?: string };

export function Logo({ tone = "light", className = "" }: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="29" height="32" viewBox="0 0 29 32" fill="none" aria-hidden="true">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          fill="#D4FB20"
          d="M0 5a5 5 0 0 1 5-5h2.5v11.4A9.4 9.4 0 0 1 15.8 9C23 9 29 14.6 29 21s-6 11-13.2 11H5a5 5 0 0 1-5-5V5Zm12.5 12.2 8.3 3.8-8.3 3.8v-7.6Z"
        />
      </svg>
      <span
        className={`font-display text-[26px] leading-none font-bold tracking-tight ${
          tone === "light" ? "text-white" : "text-ink"
        }`}
      >
        ByteSpace
      </span>
    </span>
  );
}
