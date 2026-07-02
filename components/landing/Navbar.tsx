"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandMark } from "@/components/ui/BrandMark";
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { NAV_LINKS } from "@/lib/brand";
import { useT } from "@/lib/i18n";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const t = useT();

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
                {t.nav[link.key]}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-2.5 md:flex">
          <LanguageSwitcher />
          <Button href="/login" variant="outline" size="sm">
            {t.nav.login}
          </Button>
          <Button href="/signup" variant="primary" size="sm">
            {t.nav.signup}
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
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
                  {t.nav[link.key]}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium text-ink-muted">
              {t.nav.language}
            </span>
            <LanguageSwitcher />
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2.5">
            <Button href="/login" variant="outline" size="md">
              {t.nav.login}
            </Button>
            <Button href="/signup" variant="primary" size="md">
              {t.nav.signup}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
