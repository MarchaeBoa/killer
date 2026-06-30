import { Play } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";

function Squiggle() {
  return (
    <svg viewBox="0 0 200 16" preserveAspectRatio="none" fill="none">
      <path
        d="M3 11C28 5 52 4 78 7C104 10 128 12 160 6C176 3 188 4 197 7"
        stroke="#1D3FE6"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function Highlight({ children }: { children: string }) {
  return (
    <span className="squiggle-underline text-primary">
      {children}
      <Squiggle />
    </span>
  );
}

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

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface pt-16 pb-20 sm:pt-20 sm:pb-28">
      {/* soft background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[860px] -translate-x-1/2 rounded-full bg-primary-soft/70 blur-3xl"
      />

      <div className="container-page relative flex flex-col items-center text-center">
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-white px-3 py-1.5 shadow-soft">
            <span className="flex -space-x-2">
              <PlatformDot label="TT" className="bg-ink" />
              <PlatformDot label="f" className="bg-[#1877F2]" />
              <PlatformDot label="S" className="bg-[#95BF47]" />
            </span>
            <span className="text-sm font-semibold text-ink">
              <CountUp value={234} prefix="+" suffix="K" /> Products ·{" "}
              <CountUp value={10} prefix="+" suffix="K" /> Ads
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <h1 className="mt-7 max-w-4xl text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
            Find <Highlight>PRODUCTS</Highlight> and <Highlight>ADS</Highlight>
            <br className="hidden sm:block" /> in one platform
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mt-6 max-w-2xl text-lg text-ink-muted">
            Maximize your sales with the #1 market-analysis platform — validate
            the best-performing Ads and Products.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div className="mt-9 flex flex-col items-center gap-4">
            <Button href="/signup" size="lg" className="px-10">
              Get started
            </Button>
            <button
              type="button"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition-colors hover:text-primary"
            >
              <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-white shadow-soft transition-colors group-hover:border-primary">
                <Play className="h-3.5 w-3.5 fill-current text-primary" />
              </span>
              Watch video
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;
