import { Chrome, Hexagon, Puzzle, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { BRAND } from "@/lib/brand";

function ExtensionMockup() {
  return (
    <div className="relative w-full max-w-md">
      {/* Browser frame */}
      <div className="overflow-hidden rounded-2xl border border-white/15 bg-white shadow-soft-lg">
        <div className="flex items-center gap-2 border-b border-border bg-surface-tint px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#FF6058]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#28C840]" />
          <div className="ml-3 flex h-7 flex-1 items-center gap-2 rounded-lg bg-white px-3 text-xs text-ink-muted">
            <Chrome className="h-3.5 w-3.5" />
            store.example.com
          </div>
          <Puzzle className="h-4 w-4 text-ink-muted" />
        </div>

        {/* Extension popover */}
        <div className="relative p-4">
          <div className="absolute right-4 top-4 w-56 rounded-2xl border border-border bg-white p-3 shadow-soft-lg">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-white">
                <Hexagon className="h-4 w-4" />
              </span>
              <div className="leading-tight">
                <p className="text-sm font-bold text-ink">{BRAND}</p>
                <p className="flex items-center gap-1 text-[11px] text-ink-muted">
                  <Star className="h-3 w-3 fill-current text-amber-400" /> 4.9 ·
                  Free
                </p>
              </div>
            </div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between rounded-lg bg-surface-tint px-2.5 py-1.5 text-[11px]">
                <span className="text-ink-muted">Live sales</span>
                <span className="font-bold text-success">+1,204</span>
              </div>
              <div className="flex items-center justify-between rounded-lg bg-surface-tint px-2.5 py-1.5 text-[11px]">
                <span className="text-ink-muted">Stock</span>
                <span className="font-bold text-ink">4,532</span>
              </div>
            </div>
            <div className="mt-3 h-8 rounded-lg bg-primary" />
          </div>

          {/* faux page content behind popover */}
          <div className="space-y-3 pt-2">
            <div className="h-28 w-2/3 rounded-xl bg-surface-tint" />
            <div className="h-3 w-1/2 rounded-full bg-surface-tint" />
            <div className="h-3 w-1/3 rounded-full bg-surface-tint" />
            <div className="h-9 w-28 rounded-lg bg-primary-soft" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ExtensionBanner() {
  return (
    <section className="bg-surface py-12 sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-[#152CB0] px-6 py-10 shadow-soft-lg sm:px-12 sm:py-14">
            {/* decorative blobs */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-10 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-accent-pink/10 blur-3xl"
            />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div className="text-white">
                <Badge variant="translucent">Install our extension</Badge>
                <h2 className="mt-5 max-w-md text-3xl text-white sm:text-4xl">
                  Discover winning products in seconds.
                </h2>
                <p className="mt-4 max-w-md text-base text-white/80">
                  Install the {BRAND} Chrome extension and take your store to the
                  next level.
                </p>
                <div className="mt-7">
                  <Button href="/signup" variant="white" size="lg">
                    <Chrome className="h-5 w-5" />
                    Free and ready to use
                  </Button>
                </div>
              </div>

              {/* Mockup bleeding off the right edge */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="lg:translate-x-10 lg:translate-y-2">
                  <ExtensionMockup />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default ExtensionBanner;
