"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Flame, Radio, ShieldCheck, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { Sparkline } from "@/components/ui/Sparkline";
import { SmartImage } from "@/components/ui/SmartImage";
import { useT } from "@/lib/i18n";

function Squiggle() {
  return (
    <svg
      viewBox="0 0 200 16"
      preserveAspectRatio="none"
      fill="none"
      className="absolute -bottom-2 left-0 h-3 w-full"
      aria-hidden="true"
    >
      <path
        d="M3 11C28 5 52 4 78 7C104 10 128 12 160 6C176 3 188 4 197 7"
        stroke="#1D3FE6"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

type Winner = {
  img: string;
  flag: string;
  sales: number;
  growth: number;
  tone: "blue" | "pink";
  data: number[];
};

const WINNERS: Winner[] = [
  { img: "/images/tiktok-lipkit.jpg", flag: "🇲🇽", sales: 1284, growth: 212, tone: "pink", data: [4, 5, 4, 7, 6, 9, 11, 14, 17, 22] },
  { img: "/images/ad-beauty.jpg", flag: "🇨🇴", sales: 968, growth: 175, tone: "blue", data: [3, 4, 6, 5, 8, 10, 9, 13, 16, 20] },
  { img: "/images/trend-blush.jpg", flag: "🇧🇷", sales: 1520, growth: 198, tone: "pink", data: [5, 7, 6, 10, 9, 13, 15, 18, 21, 26] },
  { img: "/images/ad-kitchen.jpg", flag: "🇨🇱", sales: 742, growth: 143, tone: "blue", data: [2, 3, 5, 4, 6, 8, 10, 12, 14, 18] },
];

const AVATARS = [
  "/images/live-creator.jpg",
  "/images/live-studio.jpg",
  "/images/live-mall.jpg",
];

function PlatformDot({ label, className }: { label: string; className: string }) {
  return (
    <span
      title={label}
      className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold text-white ring-2 ring-white ${className}`}
    >
      {label}
    </span>
  );
}

/** The "live app" panel — the hero's centerpiece, no video required. */
function LiveWinnersPanel() {
  const t = useT();
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [toast, setToast] = useState(false);
  const [scanned, setScanned] = useState(128940);

  useEffect(() => {
    if (reduce) return;
    const rows = setInterval(() => setActive((a) => (a + 1) % WINNERS.length), 1900);
    let on = false;
    const toaster = setInterval(() => {
      on = !on;
      setToast(on);
    }, 3800);
    const ticker = setInterval(
      () => setScanned((s) => s + 7 + Math.floor(Math.random() * 23)),
      1300,
    );
    return () => {
      clearInterval(rows);
      clearInterval(toaster);
      clearInterval(ticker);
    };
  }, [reduce]);

  return (
    <div className="relative">
      {/* glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-tr from-primary/25 via-accent-pink/15 to-transparent blur-2xl"
      />

      <div className="relative overflow-hidden rounded-[1.6rem] border border-border bg-white shadow-soft-lg">
        {/* header */}
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <div className="flex items-center gap-2">
            <span className="grid h-7 w-7 place-items-center rounded-lg bg-ink text-[10px] font-extrabold text-white">
              TT
            </span>
            <span className="text-sm font-bold text-ink">{t.hero.panelTitle}</span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-coral/10 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-accent-coral">
            <span className="relative flex h-2 w-2">
              {!reduce && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-coral opacity-70" />
              )}
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-coral" />
            </span>
            Live
          </span>
        </div>

        {/* scanning sweep */}
        {!reduce && (
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-14 z-10 h-16 bg-gradient-to-b from-primary/0 via-primary/10 to-primary/0"
            animate={{ y: ["0%", "320%"] }}
            transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
          />
        )}

        {/* winners list */}
        <ul className="divide-y divide-border">
          {WINNERS.map((w, i) => {
            const isActive = i === active;
            const stroke = w.tone === "pink" ? "#FF4D8D" : "#1D3FE6";
            return (
              <li
                key={w.img}
                className={`flex items-center gap-3 px-4 py-3 transition-colors duration-500 ${
                  isActive ? "bg-primary-soft/60" : "bg-white"
                }`}
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-border">
                  <SmartImage
                    src={w.img}
                    alt={t.hero.winners[i]}
                    className="h-full w-full object-cover"
                    fallback={<span className="grid h-full w-full place-items-center">🛍️</span>}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-ink">
                    <span className="mr-1" aria-hidden="true">
                      {w.flag}
                    </span>
                    {t.hero.winners[i]}
                  </p>
                  <p className="text-[11px] text-ink-muted">
                    <span className="font-semibold text-ink">
                      <CountUp value={w.sales} separator />
                    </span>{" "}
                    {t.hero.panelSalesToday}
                  </p>
                </div>

                <Sparkline data={w.data} stroke={stroke} width={56} height={26} />

                <span className="inline-flex items-center gap-0.5 rounded-full bg-success/10 px-2 py-1 text-[11px] font-bold text-success">
                  <TrendingUp className="h-3 w-3" />
                  <CountUp value={w.growth} prefix="+" suffix="%" />
                </span>
              </li>
            );
          })}
        </ul>

        {/* footer ticker */}
        <div className="flex items-center justify-between border-t border-border bg-surface-tint px-5 py-3">
          <span className="text-[11px] text-ink-muted">
            <span className="font-bold text-ink">
              {scanned.toLocaleString("en-US")}
            </span>{" "}
            {t.hero.panelScanned}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-primary">
            <ShieldCheck className="h-3.5 w-3.5" />
            AI
          </span>
        </div>

        {/* "new winner" toast */}
        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-16 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full bg-ink px-4 py-2 text-xs font-bold text-white shadow-soft-lg"
            >
              <span className="inline-flex items-center gap-1.5">
                <Flame className="h-3.5 w-3.5 text-accent-coral" />
                {t.hero.toast}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export function Hero() {
  const t = useT();
  const reduce = useReducedMotion();
  const [rot, setRot] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setRot((r) => (r + 1) % t.hero.rotate.length),
      2600,
    );
    return () => clearInterval(id);
  }, [reduce, t.hero.rotate.length]);

  return (
    <section className="relative overflow-hidden bg-surface pt-14 pb-20 sm:pt-16 sm:pb-24">
      {/* soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[960px] -translate-x-1/2 rounded-full bg-primary-soft/70 blur-3xl"
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div className="text-center lg:text-left">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1.5 text-xs font-semibold text-ink shadow-soft">
              <span className="relative flex h-2 w-2">
                {!reduce && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-coral opacity-70" />
                )}
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-coral" />
              </span>
              <Radio className="h-3.5 w-3.5 text-accent-coral" />
              {t.hero.livePill}
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tightest sm:text-5xl lg:text-6xl">
              <span className="block text-ink">{t.hero.titleStart}</span>
              <span className="relative mt-1 flex min-h-[1.15em] items-center justify-center overflow-hidden lg:justify-start">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={rot}
                    initial={reduce ? false : { y: "0.7em", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={reduce ? undefined : { y: "-0.7em", opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="relative inline-block text-primary"
                  >
                    {t.hero.rotate[rot]}
                    <Squiggle />
                  </motion.span>
                </AnimatePresence>
              </span>
              <span className="mt-1 block text-ink">{t.hero.titleEnd}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-ink-muted lg:mx-0">
              {t.hero.subtitle}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:items-center lg:justify-start">
              <Button href="/signup" size="lg" className="group px-8">
                {t.hero.ctaFree}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Button>

              <div className="flex items-center gap-3">
                <div className="flex -space-x-2.5">
                  {AVATARS.map((src, i) => (
                    <span
                      key={src}
                      className="relative grid h-9 w-9 place-items-center overflow-hidden rounded-full border-2 border-white bg-surface-tint text-sm shadow-soft"
                    >
                      <SmartImage
                        src={src}
                        alt=""
                        className="h-full w-full object-cover"
                        fallback={<span aria-hidden="true">🧑</span>}
                      />
                    </span>
                  ))}
                </div>
                <p className="max-w-[13rem] text-left text-xs font-medium text-ink-muted">
                  {t.hero.socialProof}
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-border bg-white/70 px-3 py-1.5 text-sm font-semibold text-ink shadow-soft">
              <span className="flex -space-x-2">
                <PlatformDot label="TT" className="bg-ink" />
                <PlatformDot label="f" className="bg-[#1877F2]" />
                <PlatformDot label="S" className="bg-[#95BF47]" />
              </span>
              <CountUp value={234} prefix="+" suffix="K" /> {t.hero.badgeProducts} ·{" "}
              <CountUp value={10} prefix="+" suffix="K" /> {t.hero.badgeAds}
            </div>
          </Reveal>
        </div>

        {/* Right: live panel */}
        <Reveal delay={0.15}>
          <LiveWinnersPanel />
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
