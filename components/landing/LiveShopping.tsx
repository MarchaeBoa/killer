"use client";

import { Eye, Radio, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { SmartImage } from "@/components/ui/SmartImage";
import { useT } from "@/lib/i18n";

type Live = {
  image: string;
  emoji: string;
  seller: string;
  viewers: number;
  sold: number;
};

const LIVES: Live[] = [
  { image: "/images/live-mall.jpg", emoji: "🎥", seller: "@glow.beauty", viewers: 3120, sold: 214 },
  { image: "/images/live-studio.jpg", emoji: "👟", seller: "@step.daily", viewers: 1870, sold: 132 },
  { image: "/images/live-creator.jpg", emoji: "💃", seller: "@mias.picks", viewers: 4560, sold: 301 },
  { image: "/images/live-commerce.jpg", emoji: "🛒", seller: "@deal.hunter", viewers: 2740, sold: 188 },
];

function LiveTile({
  live,
  product,
  liveBadge,
  soldLabel,
  delay,
}: {
  live: Live;
  product: string;
  liveBadge: string;
  soldLabel: string;
  delay: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="group relative aspect-[3/4] overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-soft-lg">
        <SmartImage
          src={live.image}
          alt={`${live.seller} — ${product}`}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          fallback={
            <span className="grid h-full w-full place-items-center text-5xl" aria-hidden="true">
              {live.emoji}
            </span>
          }
        />
        {/* readability gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

        {/* live + viewers */}
        <div className="absolute inset-x-3 top-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-coral px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wide text-white shadow-soft">
            <Radio className="h-3 w-3" />
            {liveBadge}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-black/45 px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
            <Eye className="h-3 w-3" />
            <CountUp value={live.viewers} separator />
          </span>
        </div>

        {/* seller + sold */}
        <div className="absolute inset-x-3 bottom-3 text-white">
          <p className="text-sm font-bold">{live.seller}</p>
          <p className="text-[12px] text-white/75">{product}</p>
          <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-sm">
            <ShoppingBag className="h-3 w-3" />
            <CountUp value={live.sold} separator /> {soldLabel}
          </span>
        </div>
      </div>
    </Reveal>
  );
}

export function LiveShopping() {
  const t = useT();
  return (
    <section id="live" className="scroll-mt-24 bg-ink py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-pink">
              {t.live.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl text-white sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              {t.live.titleA}{" "}
              <span className="text-accent-pink">{t.live.titleB}</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-white/70">
              {t.live.subtitle}
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {LIVES.map((live, i) => (
            <LiveTile
              key={live.seller}
              live={live}
              product={t.live.products[i]}
              liveBadge={t.live.liveBadge}
              soldLabel={t.live.sold}
              delay={i * 0.08}
            />
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <p className="text-sm text-white/70">
              <CountUp
                value={12400}
                separator
                className="font-bold text-white"
              />{" "}
              {t.live.tracked}
            </p>
            <Button href="/signup" size="lg">
              {t.common.getStarted}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default LiveShopping;
