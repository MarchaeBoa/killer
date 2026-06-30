"use client";

import { useState } from "react";
import { Search, ShoppingCart, Star, Truck, Wallet } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

type ThemeKey = "Bluewave" | "Sunset" | "Goldenflare";

const THEMES: Record<
  ThemeKey,
  { banner: string; accent: string; chip: string; ring: string }
> = {
  Bluewave: {
    banner: "from-[#1D3FE6] to-[#152CB0]",
    accent: "text-[#1D3FE6]",
    chip: "bg-primary-soft text-primary",
    ring: "border-primary text-primary",
  },
  Sunset: {
    banner: "from-[#FF6B6B] to-[#FF4D8D]",
    accent: "text-[#FF4D8D]",
    chip: "bg-accent-pink/10 text-accent-pink",
    ring: "border-accent-pink text-accent-pink",
  },
  Goldenflare: {
    banner: "from-[#F5A623] to-[#E8821E]",
    accent: "text-[#E8821E]",
    chip: "bg-amber-100 text-amber-700",
    ring: "border-amber-500 text-amber-600",
  },
};

const TABS: ThemeKey[] = ["Bluewave", "Sunset", "Goldenflare"];

export function StoreTemplates() {
  const [theme, setTheme] = useState<ThemeKey>("Bluewave");
  const t = THEMES[theme];

  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-surface-tint py-16 sm:py-24"
    >
      <div className="container-page">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl">
            Store templates ready to launch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-center text-lg text-ink-muted">
            Pick a theme and generate a high-converting storefront in minutes.
          </p>
        </Reveal>

        {/* Tabs */}
        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {TABS.map((tab) => {
              const active = tab === theme;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setTheme(tab)}
                  aria-pressed={active}
                  className={`rounded-full border px-5 py-2 text-sm font-semibold transition-all ${
                    active
                      ? `bg-white shadow-soft ${THEMES[tab].ring}`
                      : "border-border bg-white/60 text-ink-muted hover:text-ink"
                  }`}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Store preview */}
        <Reveal delay={0.14}>
          <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl border border-border bg-white shadow-soft-lg">
            {/* browser top bar */}
            <div className="flex items-center gap-2 border-b border-border bg-surface-tint px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#FF6058]" />
              <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <div className="mx-auto rounded-full bg-white px-4 py-1 text-xs text-ink-muted">
                mystore.com
              </div>
            </div>

            {/* storefront header */}
            <div className="flex items-center gap-4 border-b border-border px-5 py-3.5">
              <span className={`text-lg font-extrabold ${t.accent}`}>
                MyStore
              </span>
              <div className="flex h-9 flex-1 items-center gap-2 rounded-lg bg-surface-tint px-3 text-xs text-ink-muted">
                <Search className="h-3.5 w-3.5" />
                Search products…
              </div>
              <button
                type="button"
                aria-label="Cart"
                className="relative grid h-9 w-9 place-items-center rounded-lg border border-border text-ink"
              >
                <ShoppingCart className="h-4 w-4" />
                <span
                  className={`absolute -right-1 -top-1 grid h-4 w-4 place-items-center rounded-full text-[9px] font-bold text-white ${
                    theme === "Bluewave"
                      ? "bg-primary"
                      : theme === "Sunset"
                        ? "bg-accent-pink"
                        : "bg-amber-500"
                  }`}
                >
                  3
                </span>
              </button>
            </div>

            {/* hero banner */}
            <div
              className={`relative bg-gradient-to-r ${t.banner} px-6 py-10 text-white transition-all duration-500 sm:px-10 sm:py-14`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                Guaranteed purchases
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2">
                <span className="text-3xl font-extrabold sm:text-4xl">
                  4.8/5
                </span>
                <span className="flex items-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-amber-300"
                    />
                  ))}
                </span>
                <span className="text-sm text-white/85">
                  ·{" "}
                  <CountUp
                    value={500000}
                    prefix="+"
                    separator
                    className="font-bold"
                  />{" "}
                  Orders Delivered
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                  <Truck className="h-4 w-4" />
                  FREE SHIPPING
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
                  <Wallet className="h-4 w-4" />
                  PAY ON DELIVERY
                </span>
              </div>
            </div>

            {/* product strip */}
            <div className="grid grid-cols-2 gap-4 p-5 sm:grid-cols-4">
              {["🧴", "👟", "⌚", "🎧"].map((emoji, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-border p-3 text-center"
                >
                  <div className="mb-2 grid h-20 place-items-center rounded-lg bg-surface-tint text-3xl">
                    {emoji}
                  </div>
                  <div className="mx-auto h-2 w-3/4 rounded-full bg-border" />
                  <div
                    className={`mx-auto mt-2 inline-block rounded-full px-2 py-0.5 text-[11px] font-bold ${t.chip}`}
                  >
                    $29.99
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default StoreTemplates;
