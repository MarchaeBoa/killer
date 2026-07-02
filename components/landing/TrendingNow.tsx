import { Flame, Store, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { Sparkline } from "@/components/ui/Sparkline";
import { SmartImage } from "@/components/ui/SmartImage";

type Trend = {
  image: string;
  emoji: string;
  name: string;
  category: string;
  sales: number;
  growth: number;
  data: number[];
};

const TRENDS: Trend[] = [
  {
    image: "/images/trend-blush.jpg",
    emoji: "🌸",
    name: "Blush & Glow Palette",
    category: "Makeup",
    sales: 4820,
    growth: 212,
    data: [4, 5, 4, 7, 6, 9, 11, 10, 14, 17, 20, 25],
  },
  {
    image: "/images/trend-serum-1.jpg",
    emoji: "🧴",
    name: "Hyaluronic Acid Serum",
    category: "Skincare",
    sales: 6310,
    growth: 175,
    data: [6, 7, 6, 9, 8, 12, 14, 13, 17, 19, 22, 27],
  },
  {
    image: "/images/trend-serum-2.jpg",
    emoji: "💧",
    name: "Facial Repair Serum",
    category: "Skincare",
    sales: 2940,
    growth: 143,
    data: [2, 3, 5, 4, 6, 8, 7, 10, 12, 13, 15, 18],
  },
  {
    image: "/images/trend-serum-3.jpg",
    emoji: "✨",
    name: "Vitamin B5 Serum",
    category: "Skincare",
    sales: 5170,
    growth: 198,
    data: [5, 6, 8, 7, 10, 9, 13, 15, 14, 18, 21, 26],
  },
];

function TrendCard({ trend, delay }: { trend: Trend; delay: number }) {
  return (
    <Reveal delay={delay}>
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-shadow hover:shadow-soft-lg">
        <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-gradient-to-br from-accent-pink/15 to-accent-coral/15">
          <SmartImage
            src={trend.image}
            alt={trend.name}
            className="absolute inset-0 h-full w-full object-cover"
            fallback={
              <span className="text-6xl" aria-hidden="true">
                {trend.emoji}
              </span>
            }
          />
          <span className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-accent-coral px-2.5 py-1 text-[11px] font-extrabold text-white shadow-soft">
            <Flame className="h-3 w-3" />
            Trending
          </span>
        </div>

        <div className="space-y-3 p-4">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-wide text-ink-muted">
              {trend.category}
            </p>
            <h3 className="text-sm font-bold leading-snug text-ink">
              {trend.name}
            </h3>
          </div>

          <div className="flex items-end justify-between">
            <div className="leading-tight">
              <p className="text-lg font-extrabold text-ink">
                <CountUp value={trend.sales} separator />
              </p>
              <p className="text-[11px] text-ink-muted">sales / 30 days</p>
            </div>
            <Sparkline data={trend.data} stroke="#FF4D8D" width={84} height={34} />
          </div>

          <Badge variant="success" className="w-full justify-center">
            <TrendingUp className="h-3.5 w-3.5" />
            <CountUp value={trend.growth} prefix="+" suffix="%" /> this week
          </Badge>
        </div>
      </div>
    </Reveal>
  );
}

export function TrendingNow() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Winning products
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              <span className="text-ink">Trending in beauty</span>{" "}
              <span className="text-primary">right now</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-lg text-ink-muted">
              Real products picking up speed across the platforms — the exact
              kind of winners you can source and launch before they saturate.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {TRENDS.map((trend, i) => (
            <TrendCard key={trend.name} trend={trend} delay={i * 0.08} />
          ))}
        </div>

        {/* spotted in retail */}
        <Reveal delay={0.1}>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-border shadow-soft">
            <SmartImage
              src="/images/trend-retail.jpg"
              alt="The same serum trending in a retail store"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/65 to-ink/25" />
            <div className="relative flex flex-col gap-3 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
              <div className="max-w-lg text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[11px] font-semibold backdrop-blur-sm">
                  <Store className="h-3.5 w-3.5" />
                  Spotted in retail
                </span>
                <p className="mt-3 text-lg font-semibold leading-snug sm:text-xl">
                  When a product is selling out in stores too, you know the
                  demand is real — not just a passing ad.
                </p>
              </div>
              <div className="shrink-0 text-white">
                <p className="text-3xl font-extrabold sm:text-4xl">
                  <CountUp value={38} prefix="+" suffix="%" />
                </p>
                <p className="text-sm text-white/75">retail sell-through</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default TrendingNow;
