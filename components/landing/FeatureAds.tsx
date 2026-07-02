import { Heart, MessageCircle, Share2, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { SmartImage } from "@/components/ui/SmartImage";

type Ad = {
  page: string;
  badge: string;
  badgeClass: string;
  emoji: string;
  image?: string;
  caption: string;
  likes: number;
  comments: number;
  shares: number;
  tone: "blue" | "pink";
};

const ADS: Ad[] = [
  {
    page: "GlowSkincare",
    badge: "f",
    badgeClass: "bg-[#1877F2]",
    emoji: "✨",
    image: "/images/ad-beauty.jpg",
    caption: "This serum sold out 3 times this month 🔥",
    likes: 12400,
    comments: 893,
    shares: 2100,
    tone: "blue",
  },
  {
    page: "KitchenHacks",
    badge: "TT",
    badgeClass: "bg-ink",
    emoji: "🥕",
    image: "/images/ad-kitchen.jpg",
    caption: "The kitchen gadget everyone is talking about",
    likes: 48200,
    comments: 1540,
    shares: 6700,
    tone: "pink",
  },
];

function AdMetric({
  icon,
  value,
}: {
  icon: React.ReactNode;
  value: number;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-muted">
      {icon}
      <CountUp value={value} separator />
    </span>
  );
}

function AdCard({ ad, className }: { ad: Ad; className?: string }) {
  return (
    <div
      className={`w-64 overflow-hidden rounded-2xl border border-border bg-white shadow-soft-lg ${className ?? ""}`}
    >
      <div className="flex items-center gap-2.5 p-3">
        <span
          className={`grid h-8 w-8 place-items-center rounded-full text-[10px] font-bold text-white ${ad.badgeClass}`}
        >
          {ad.badge}
        </span>
        <div className="leading-tight">
          <p className="text-sm font-bold text-ink">{ad.page}</p>
          <p className="text-[11px] text-ink-muted">Sponsored</p>
        </div>
      </div>

      <p className="px-3 pb-2 text-xs text-ink">{ad.caption}</p>

      <div
        className={`relative flex h-36 items-center justify-center overflow-hidden bg-gradient-to-br ${
          ad.tone === "pink"
            ? "from-accent-pink/20 to-accent-coral/20"
            : "from-primary-soft to-surface-tint"
        }`}
      >
        <SmartImage
          src={ad.image}
          alt={`${ad.page} ad creative`}
          className="absolute inset-0 h-full w-full object-cover"
          fallback={
            <span className="text-5xl" aria-hidden="true">
              {ad.emoji}
            </span>
          }
        />
        <span className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-[11px] font-semibold text-white shadow-soft">
          <ShoppingBag className="h-3.5 w-3.5" />
          Buy now
        </span>
      </div>

      <div className="flex items-center justify-between px-3 py-2.5">
        <AdMetric icon={<Heart className="h-3.5 w-3.5" />} value={ad.likes} />
        <AdMetric
          icon={<MessageCircle className="h-3.5 w-3.5" />}
          value={ad.comments}
        />
        <AdMetric icon={<Share2 className="h-3.5 w-3.5" />} value={ad.shares} />
      </div>
    </div>
  );
}

function AdCluster() {
  return (
    <div className="relative mx-auto h-[440px] w-full max-w-md">
      <AdCard
        ad={ADS[0]}
        className="absolute left-2 top-2 rotate-[-3deg]"
      />
      <AdCard
        ad={ADS[1]}
        className="absolute bottom-2 right-2 rotate-[3deg]"
      />
    </div>
  );
}

export function FeatureAds() {
  return (
    <section id="ads" className="scroll-mt-24 bg-surface py-16 sm:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <AdCluster />
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Ad library
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              <span className="text-primary">Ads</span>{" "}
              <span className="text-ink">that Work</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink-muted">
              Explore over{" "}
              <CountUp
                value={100000}
                separator
                className="font-semibold text-ink"
              />{" "}
              exclusive ads from the platforms that matter, with engagement data
              and tracking.
            </p>
            <div className="mt-8">
              <Button href="/signup" size="lg">
                Get started
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FeatureAds;
