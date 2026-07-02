"use client";

import { useI18n } from "@/lib/i18n";
import type { Locale } from "@/lib/content";

const OPTIONS: { code: Locale; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "pt", label: "PT" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useI18n();

  return (
    <div
      role="group"
      aria-label="Language"
      className={`inline-flex items-center rounded-full border border-border bg-white p-0.5 ${className ?? ""}`}
    >
      {OPTIONS.map((opt) => {
        const active = opt.code === locale;
        return (
          <button
            key={opt.code}
            type="button"
            onClick={() => setLocale(opt.code)}
            aria-pressed={active}
            className={`rounded-full px-2.5 py-1 text-xs font-bold transition-colors ${
              active
                ? "bg-primary text-white"
                : "text-ink-muted hover:text-ink"
            }`}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

export default LanguageSwitcher;
