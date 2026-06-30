import Link from "next/link";
import { BrandTile } from "@/components/ui/BrandMark";
import { BRAND } from "@/lib/brand";

const COLUMNS: { title: string; links: string[] }[] = [
  {
    title: "Product",
    links: ["Product database", "Sales tracker", "AI store builder", "Pricing"],
  },
  {
    title: "Ads",
    links: ["Ad library", "TikTok ads", "Meta ads", "Tracking"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Cookies", "Refunds"],
  },
];

export function Footer() {
  const year = 2026;

  return (
    <footer className="bg-ink text-white/70">
      <div className="container-page py-14">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <BrandTile />
              <span className="text-lg font-extrabold tracking-tightest text-white">
                {BRAND}
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/60">
              The #1 market-analysis platform to spy on ads, track sales, and
              find winning products instantly.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-bold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/50">
            © {year} {BRAND}. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-sm text-white/50">
            <Link href="#" className="transition-colors hover:text-white">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Terms
            </Link>
            <Link href="#" className="transition-colors hover:text-white">
              Status
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
