import { Reveal } from "@/components/ui/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";

type Logo = {
  name: string;
  /**
   * Real brand logo under public/images/logos/. Drop the file in and it shows
   * automatically; until then a styled text fallback is displayed.
   */
  image: string;
  glyph: string;
  /** Tailwind color class used only by the text fallback. */
  color: string;
};

const LOGOS: Logo[] = [
  { name: "Dropi", image: "/images/logos/dropi.png", glyph: "◉", color: "text-[#FF6A00]" },
  { name: "Shopify", image: "/images/logos/shopify.png", glyph: "🛍", color: "text-[#5E8E3E]" },
  { name: "TikTok Shop", image: "/images/logos/tiktok-shop.png", glyph: "♪", color: "text-ink" },
  { name: "Master", image: "/images/logos/master.png", glyph: "⚡", color: "text-ink-muted" },
];

export function LogoCloud() {
  return (
    <section className="bg-surface py-12">
      <div className="container-page">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Acceso a todas las plataformas
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center opacity-90 transition-opacity duration-300 hover:opacity-100"
              >
                <SmartImage
                  src={logo.image}
                  alt={logo.name}
                  className="h-8 w-auto object-contain sm:h-9"
                  fallback={
                    <span
                      className={`flex items-center gap-2 text-lg font-bold tracking-tight ${logo.color}`}
                    >
                      <span className="text-2xl leading-none" aria-hidden="true">
                        {logo.glyph}
                      </span>
                      {logo.name}
                    </span>
                  }
                />
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-12 h-px max-w-3xl bg-border" />
      </div>
    </section>
  );
}

export default LogoCloud;
