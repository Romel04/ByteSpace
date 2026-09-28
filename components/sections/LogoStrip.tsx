import type { ReactNode } from "react";
import { LOGO_STRIP } from "@/lib/data";

const icons: Record<(typeof LOGO_STRIP)[number], ReactNode> = {
  waves: (
    <svg viewBox="0 0 40 40" className="size-10" fill="currentColor" aria-hidden="true">
      <circle cx="20" cy="20" r="20" />
      <path d="M4 14c6-4 10 3 16-1s10 1 16-2M3 21c6-4 10 3 17-1s10 1 17-2M5 28c6-4 10 3 15-1s10 1 15-2" stroke="#f5f5f6" strokeWidth="2" fill="none" />
    </svg>
  ),
  burst: (
    <svg viewBox="0 0 40 40" className="size-10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => (
        <line key={i} x1="20" y1="3" x2="20" y2="10" transform={`rotate(${i * 30} 20 20)`} />
      ))}
    </svg>
  ),
  bolt: (
    <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="currentColor" />
      <path d="M22 7 11 22h8l-2 11 12-16h-8z" fill="#f5f5f6" />
    </svg>
  ),
  petals: (
    <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">
      <circle cx="20" cy="20" r="20" fill="currentColor" />
      {[[20, 11], [29, 20], [20, 29], [11, 20]].map(([cx, cy]) => (
        <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="#f5f5f6" />
      ))}
    </svg>
  ),
  rings: (
    <svg viewBox="0 0 40 40" className="size-10" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
      {[19, 15, 11, 7, 3.5].map((r) => (
        <circle key={r} cx={20 + (19 - r) / 3} cy="20" r={r} />
      ))}
    </svg>
  ),
};

export function LogoStrip() {
  return (
    <section aria-label="Trusted by" className="bg-surface">
      <ul className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-10 gap-y-8 px-5 py-14 text-muted sm:px-6 lg:min-h-[202px] xl:flex-nowrap xl:justify-between">
        {LOGO_STRIP.map((name) => (
          <li key={name} className="flex items-center gap-2">
            {icons[name]}
            <span className="text-2xl font-bold tracking-tight">Logoipsum</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
