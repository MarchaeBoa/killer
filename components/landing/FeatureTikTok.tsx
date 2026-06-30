import { TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { Sparkline } from "@/components/ui/Sparkline";

function TikTokCard() {
  return (
    <div className="relative mx-auto w-full max-w-sm">
      {/* commission badge */}
      <div className="absolute -left-3 -top-3 z-10 rounded-full text-gradient-badge px-4 py-2 text-sm font-extrabold text-white shadow-soft-lg">
        +35% COMMISSION
      </div>

      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-soft-lg">
        <div className="relative flex h-48 items-center justify-center bg-gradient-to-br from-accent-pink/15 to-accent-coral/15">
          <span className="text-7xl" aria-hidden="true">
            💄
          </span>
          <span className="absolute left-3 top-3 grid h-9 w-9 place-items-center rounded-xl bg-ink text-xs font-extrabold text-white">
            TT
          </span>
        </div>

        <div className="space-y-4 p-5">
          <div className="flex items-start justify-between gap-3">
            <h4 className="text-base font-bold text-ink">
              Velvet Matte Lip Kit (6-Pack)
            </h4>
            <Badge variant="success">14% Commission</Badge>
          </div>

          <div className="flex items-center justify-between rounded-xl bg-surface-tint p-3">
            <div className="leading-tight">
              <p className="text-xs font-medium text-ink-muted">Trend</p>
              <p className="inline-flex items-center gap-1 text-lg font-extrabold text-success">
                <TrendingUp className="h-4 w-4" />
                <CountUp value={345} prefix="+" />
                <span className="text-xs font-medium text-ink-muted">
                  / 7 Days
                </span>
              </p>
            </div>
            <Sparkline
              data={[6, 8, 7, 11, 10, 15, 18, 17, 23, 28]}
              stroke="#FF4D8D"
              width={120}
              height={40}
            />
          </div>

          <Button href="/signup" size="md" className="w-full">
            View on TikTok Shop
          </Button>
        </div>
      </div>
    </div>
  );
}

export function FeatureTikTok() {
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              TikTok Shop
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] lg:leading-[1.12]">
              <span className="text-primary">TikTok Shop Products</span>{" "}
              <span className="text-ink">that Break the Market</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink-muted">
              Access an exclusive selection of the best-selling products on
              TikTok Shop in the US — the perfect chance to replicate these wins
              in your market.
            </p>
            <div className="mt-8">
              <Button href="/signup" size="lg">
                Get started
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <TikTokCard />
        </Reveal>
      </div>
    </section>
  );
}

export default FeatureTikTok;
