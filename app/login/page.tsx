"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BrandTile } from "@/components/ui/BrandMark";
import { BRAND } from "@/lib/brand";
import { useT } from "@/lib/i18n";

export default function LoginPage() {
  const t = useT();
  return (
    <main className="grid min-h-screen place-items-center bg-surface-tint px-5 py-16">
      <div className="w-full max-w-md rounded-2xl border border-border bg-white p-8 shadow-soft">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-muted transition-colors hover:text-ink"
        >
          <ArrowLeft className="h-4 w-4" />
          {t.auth.back}
        </Link>

        <div className="mt-6 flex items-center gap-2.5">
          <BrandTile />
          <span className="text-lg font-extrabold tracking-tightest text-ink">
            {BRAND}
          </span>
        </div>

        <h1 className="mt-6 text-2xl">{t.auth.login.title}</h1>
        <p className="mt-2 text-sm text-ink-muted">{t.auth.login.subtitle}</p>

        <form className="mt-6 space-y-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              {t.auth.email}
            </label>
            <input
              type="email"
              placeholder={t.auth.emailPlaceholder}
              className="h-11 w-full rounded-xl border border-border bg-surface-tint px-3.5 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-medium text-ink">
              {t.auth.password}
            </label>
            <input
              type="password"
              placeholder="••••••••"
              className="h-11 w-full rounded-xl border border-border bg-surface-tint px-3.5 text-sm text-ink placeholder:text-ink-muted focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>
          <Button size="lg" className="w-full" type="button">
            {t.auth.login.submit}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-ink-muted">
          {t.auth.login.noAccount}{" "}
          <Link href="/signup" className="font-semibold text-primary">
            {t.auth.login.signupLink}
          </Link>
        </p>
      </div>
    </main>
  );
}
