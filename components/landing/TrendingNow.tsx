"use client";

import { Flame, Store, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { Sparkline } from "@/components/ui/Sparkline";
import { SmartImage } from "@/components/ui/SmartImage";
import { useT } from "@/lib/i18n";

type Trend = {
  image: string;
  emoji: string;
  cat: "makeup" | "skincare";
  sales: number;
  growth: number;
  data: number[];
};

const TRENDS: Trend[] = [
  {
    image: "/images/trend-blush.jpg",
    emoji: "🌸",
    cat: "makeup",
    sales: 4820,
    growth: 212,
    data: [4, 5, 4, 7, 6, 9, 11, 10, 14, 17, 20, 25],
  },
  {
    image: "/images/trend-serum-1.jpg",
    emoji: "🧴",
    cat: "skincare",
    sales: 6310,
    growth: 175,
    data: [6, 7, 6, 9, 8, 12, 14, 13, 17, 19, 22, 27],
  },
  {
    image: "/images/trend-serum-2.jpg",
    emoji: "💧",
    cat: "skincare",
    sales: 2940,
    growth: 143,
    data: [2, 3, 5, 4, 6, 8, 7, 10, 12, 13, 15, 18],
  },
  {
    image: "/images/trend-serum-3.jpg",
    emoji: "✨",
    cat: "skincare",
    sales: 5170,
    growth: 198,
    data: [5, 6, 8, 7, 10, 9, 13, 15, 14, 18, 21, 26],
  },
];

function TrendCard({
  trend,
  name,
  category,
  labels,
  delay,
}: {
  trend: Trend;
  name: string;
  category: string;
  labels: { trending: string; salesLabel: string; thisWeek: string };
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-shadow hover:shadow-soft-lg">
        <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-accent-pink/15 to-accent-coral/15">
          <SmartImage
            src={trend.image}
            alt={name}
            className="absolute inset-0 h-full w-full object-cover"
            fallback={
              <span className="text-6xl" aria-hidden="true">
                {trend.emoji}
              </span>
            }
          />
          <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-accent-coral px-2.5 py-1 text-[11px] font-extrabold text-white shadow-soft">
            <Flame className="h-3 w-3" />
            {labels.trending}
          </span>
        </div>

        <div className="space-y-3 p-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              {category}
            </p>
            <h3 className="text-sm font-bold leading-snug text-ink">{name}</h3>
          </div>

          <div className="flex items-end justify-between">
            <div className="leading-tight">
              <p className="text-lg font-extrabold text-ink">
                <CountUp value={trend.sales} separator />
              </p>
              <p className="text-[11px] text-ink-muted">{labels.salesLabel}</p>
            </div>
            <Sparkline data={trend.data} stroke="#FF4D8D" width={84} height={34} />
          </div>

          <Badge variant="success" className="w-full justify-center">
            <TrendingUp className="h-3.5 w-3.5" />
            <CountUp value={trend.growth} prefix="+" suffix="%" /> {labels.thisWeek}
          </Badge>
        </div>
      </div>
    </Reveal>
  );
}

export function TrendingNow() {
  const t = useT();
  const labels = {
    trending: t.trending.trending,
    salesLabel: t.trending.salesLabel,
    thisWeek: t.trending.thisWeek,
  };

  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {t.trending.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              <span className="text-ink">{t.trending.titleA}</span>{" "}
              <span className="text-primary">{t.trending.titleB}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-ink-muted">
              {t.trending.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {TRENDS.map((trend, i) => (
            <TrendCard
              key={trend.image}
              trend={trend}
              name={t.trending.names[i]}
              category={
                trend.cat === "makeup"
                  ? t.trending.catMakeup
                  : t.trending.catSkincare
              }
              labels={labels}
              delay={i * 0.08}
            />
          ))}
        </div>

        {/* spotted in retail */}
        <Reveal delay={0.1}>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-border shadow-soft">
            <SmartImage
              src="/images/trend-retail.jpg"
              alt={t.trending.spotted}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/65 to-ink/25" />
            <div className="relative flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="max-w-lg text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold backdrop-blur-sm">
                  <Store className="h-3.5 w-3.5" />
                  {t.trending.spotted}
                </span>
                <p className="mt-3 text-lg font-semibold leading-snug sm:text-xl">
                  {t.trending.bannerText}
                </p>
              </div>
              <div className="shrink-0 text-white">
                <p className="text-3xl font-extrabold sm:text-4xl">
                  <CountUp value={38} prefix="+" suffix="%" />
                </p>
                <p className="text-sm text-white/75">{t.trending.sellThrough}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default TrendingNow;
