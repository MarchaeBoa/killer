import { Chrome, Hexagon, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { BRAND } from "@/lib/brand";

/**
 * The banner graphic: the real Google Chrome logo (public/images/chrome.jpg,
 * with a lucide fallback) inside a white app tile, overlapping the extension's
 * blue app icon — matching the reference layout.
 */
function ExtensionGraphic() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="grid h-32 w-32 place-items-center rounded-3xl bg-white p-4 shadow-soft-lg">
        <SmartImage
          src="/images/chrome.jpg"
          alt="Google Chrome"
          className="h-full w-full object-contain"
          fallback={<Chrome className="h-16 w-16 text-primary" />}
        />
      </div>
      <div className="-ml-8 grid h-28 w-28 place-items-center rounded-3xl bg-gradient-to-br from-primary to-[#152CB0] shadow-soft-lg ring-4 ring-white/25">
        <Hexagon className="h-14 w-14 fill-white/10 text-white" />
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
                <Badge variant="translucent">
                  <Puzzle className="h-3.5 w-3.5" />
                  Install our extension
                </Badge>
                <h2 className="mt-5 max-w-md text-3xl text-white sm:text-4xl">
                  Discover winning products in seconds.
                </h2>
                <p className="mt-4 max-w-md text-base text-white/80">
                  Install the {BRAND} Chrome extension and take your store to the
                  next level.
                </p>
                <div className="mt-7">
                  <Button href="/signup" variant="white" size="lg">
                    Free and ready to use
                  </Button>
                </div>
              </div>

              {/* Graphic bleeding toward the right edge */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="lg:translate-x-6 lg:translate-y-2">
                  <ExtensionGraphic />
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
