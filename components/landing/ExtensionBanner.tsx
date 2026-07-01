import { Chrome, Hexagon, Puzzle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { BRAND } from "@/lib/brand";

/**
 * Placeholder shown until the real hero graphic is dropped in at
 * public/images/extension-graphic.png — a Chrome disc overlapping the
 * extension's app icon, matching the reference layout.
 */
function ExtensionGraphicFallback() {
  return (
    <div className="relative flex items-center justify-center">
      <div className="grid h-32 w-32 place-items-center rounded-3xl bg-white shadow-soft-lg">
        <Chrome className="h-16 w-16 text-primary" />
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
                  Instala nuestra extensión
                </Badge>
                <h2 className="mt-5 max-w-md text-3xl text-white sm:text-4xl">
                  Descubre productos ganadores en segundos.
                </h2>
                <p className="mt-4 max-w-md text-base text-white/80">
                  Instala la extensión de Chrome de {BRAND} y lleva tu tienda al
                  siguiente nivel.
                </p>
                <div className="mt-7">
                  <Button href="/signup" variant="white" size="lg">
                    Gratis y lista para usar
                  </Button>
                </div>
              </div>

              {/* Graphic bleeding toward the right edge */}
              <div className="relative flex justify-center lg:justify-end">
                <div className="lg:translate-x-6 lg:translate-y-2">
                  <SmartImage
                    src="/images/extension-graphic.png"
                    alt="Extensión de Chrome"
                    className="w-full max-w-md object-contain"
                    fallback={<ExtensionGraphicFallback />}
                  />
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
