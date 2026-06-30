# Dropspy — Dropshipping Spy-Tool Landing Page

A high-conversion, fully responsive marketing landing page for a dropshipping
product/ad spy SaaS. Built with the App Router, TypeScript, Tailwind CSS, and
Framer Motion. All copy is in English (US).

## Tech stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** with the project design tokens
- **lucide-react** for icons
- **Framer Motion** for scroll-reveal + count-up animations
- **Inter** via `next/font/google` (weights 400–800)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other scripts:

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # next lint
```

## Project structure

```
app/
  layout.tsx          # Inter font + metadata
  page.tsx            # assembles all landing sections
  globals.css         # Tailwind layers, CSS vars, reduced-motion
  signup/page.tsx     # placeholder auth page
  login/page.tsx      # placeholder auth page
components/
  landing/            # one file per section
    Navbar, Hero, LogoCloud, ExtensionBanner, DashboardPreview,
    HowItWorks, FeatureProducts, FeatureAds, FeatureTikTok,
    StoreTemplates, FinalCta, Footer
  ui/                 # reusable primitives
    Button, Badge, ProductCard, Sparkline, Reveal, CountUp
lib/
  brand.ts            # brand name, description, nav links
  products.ts         # mock product data
tailwind.config.ts    # design tokens (colors, radius, shadows)
```

## Rebranding

The brand name, tagline, and navigation live in [`lib/brand.ts`](lib/brand.ts).
Change `BRAND` there and the logo glyph, page title, footer, and auth pages all
update automatically.

## Design tokens

Defined in `tailwind.config.ts` and `app/globals.css`:

| Token            | Value     | Usage                              |
| ---------------- | --------- | ---------------------------------- |
| `primary`        | `#1D3FE6` | Primary buttons & heading accents  |
| `primary-hover`  | `#1733C4` | Button hover                       |
| `primary-soft`   | `#EEF2FF` | Lavender section backgrounds/cards |
| `surface`        | `#FFFFFF` | Base surface                       |
| `surface-tint`   | `#F5F7FF` | Alternating section background     |
| `ink`            | `#0B1220` | Headings / near-black              |
| `ink-muted`      | `#5B6472` | Body / secondary text              |
| `border`         | `#E6E8F0` | Borders & dividers                 |
| `success`        | `#16A34A` | Positive badges                    |
| `accent-pink`    | `#FF4D8D` | Badge gradient start               |
| `accent-coral`   | `#FF6B6B` | Badge gradient end                 |

## Interactions

- Scroll-reveal fade-up on every section (staggered for card groups)
- Count-up animation on stat numbers when they enter the viewport
- Interactive product dashboard view toggle (grid / list)
- Store-template tabs that swap the storefront color theme
- Collapsible mobile navigation
- `prefers-reduced-motion` respected throughout
