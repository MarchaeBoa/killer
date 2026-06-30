import { Reveal } from "@/components/ui/Reveal";

const LOGOS = [
  { name: "TikTok Shop", glyph: "♪" },
  { name: "MasterShop", glyph: "◆" },
  { name: "Dropi", glyph: "◉" },
  { name: "Shopify", glyph: "🛍" },
];

export function LogoCloud() {
  return (
    <section className="bg-surface py-12">
      <div className="container-page">
        <Reveal>
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-ink-muted">
            Access to all platforms
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 sm:gap-x-16">
            {LOGOS.map((logo) => (
              <div
                key={logo.name}
                className="flex items-center gap-2 text-ink-muted grayscale opacity-60 transition-all duration-300 hover:opacity-100 hover:grayscale-0"
              >
                <span className="text-2xl leading-none" aria-hidden="true">
                  {logo.glyph}
                </span>
                <span className="text-lg font-bold tracking-tight">
                  {logo.name}
                </span>
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
