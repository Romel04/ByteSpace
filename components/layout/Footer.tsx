import Link from "next/link";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_COLUMNS } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto max-w-[1200px] px-5 pt-16 sm:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,580px)]">
          <div>
            <Logo tone="dark" />
            <p className="mt-3 text-base text-ink">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>
            <form className="mt-12 flex max-w-[504px] items-center gap-6" action="#" aria-label="Newsletter signup">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="Enter your email"
                className="h-[52px] min-w-0 flex-1 rounded-full border border-line bg-white px-6 text-base text-ink placeholder:text-ink/70"
              />
              <button type="submit" className="h-[46px] shrink-0 rounded-full bg-lime px-6 text-lg font-medium text-ink transition hover:brightness-95">
                Subscribe
              </button>
            </form>
            <p className="mt-6 max-w-[470px] text-xs text-ink">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3">
            {FOOTER_COLUMNS.map((col, i) => (
              <ul key={i} className="flex flex-col gap-[18px] text-base text-ink">
                {col.map((item) => (
                  <li key={item}>
                    <Link href="#" className="transition-colors hover:text-blue">{item}</Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-24 flex flex-col gap-4 border-t border-line py-8 text-sm text-ink sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ByteSpace. All rights reserved.</p>
          <ul className="flex flex-wrap gap-6">
            {["Privacy Policy", "Terms of Service", "Cookies Settings"].map((t) => (
              <li key={t}><Link href="#" className="hover:text-blue">{t}</Link></li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
