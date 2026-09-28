"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, ShoppingBag, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS } from "@/lib/data";

export function Header() {
  const [open, setOpen] = useState(false);
  const link = "text-base text-white/70 transition-colors hover:text-white";

  return (
    <header className="absolute inset-x-0 top-0 z-30">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-5 pt-6 sm:px-6 lg:h-[120px] lg:pt-0">
        <Link href="/" aria-label="ByteSpace home">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-6 lg:flex">
          {NAV_LINKS.map((item, i) => (
            <Link key={item.label} href={item.href} aria-current={i === 0 ? "page" : undefined} className={i === 0 ? "text-base text-white" : link}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
          <Link href="/login" className={link}>Sign In</Link>
          <Link href="/signup" className={link}>Join Us</Link>
          <button type="button" aria-label="Cart" className="text-white/90 hover:text-white">
            <ShoppingBag className="size-6" strokeWidth={1.5} />
          </button>
        </div>

        <button
          type="button"
          className="text-white lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>

      {open && (
        <div className="mx-5 mt-2 rounded-2xl bg-white p-5 shadow-xl sm:mx-6 lg:hidden">
          <nav aria-label="Mobile" className="flex flex-col gap-4 text-ink">
            {NAV_LINKS.map((item) => (
              <Link key={item.label} href={item.href} onClick={() => setOpen(false)} className="text-lg font-medium">
                {item.label}
              </Link>
            ))}
            <hr className="border-line" />
            <Link href="/login" onClick={() => setOpen(false)} className="text-lg">Sign In</Link>
            <Link href="/signup" onClick={() => setOpen(false)} className="text-lg font-medium text-blue">Join Us</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
