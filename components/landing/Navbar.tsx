"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BRAND, NAV_LINKS } from "@/lib/brand";

function BrandMark() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-base font-extrabold text-white shadow-[0_6px_16px_rgba(29,63,230,0.35)]">
        {BRAND.charAt(0)}
      </span>
      <span className="text-lg font-extrabold tracking-tightest text-ink">
        {BRAND}
      </span>
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 px-3 sm:top-4 sm:px-4">
      <nav className="mx-auto flex max-w-content items-center justify-between gap-4 rounded-navbar border border-border bg-white/90 px-4 py-3 shadow-soft backdrop-blur-md sm:px-6">
        <BrandMark />

        {/* Center links (desktop) */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-ink"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-2.5 md:flex">
          <Button href="/login" variant="outline" size="sm">
            Log in
          </Button>
          <Button href="/signup" variant="primary" size="sm">
            Sign up
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-xl border border-border text-ink md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="mx-auto mt-2 max-w-content rounded-2xl border border-border bg-white p-4 shadow-soft md:hidden">
          <ul className="flex flex-col">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-primary-soft"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <Button href="/login" variant="outline" size="md">
              Log in
            </Button>
            <Button href="/signup" variant="primary" size="md">
              Sign up
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
