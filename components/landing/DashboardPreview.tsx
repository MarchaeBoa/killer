"use client";

import { useState } from "react";
import {
  ChevronDown,
  Globe,
  LayoutGrid,
  List,
  Search,
  SlidersHorizontal,
} from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { Reveal } from "@/components/ui/Reveal";
import { PRODUCTS } from "@/lib/products";

function FilterChip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <button
      type="button"
      className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-white px-3.5 text-sm font-medium text-ink-muted transition-colors hover:border-primary hover:text-ink"
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
      <ChevronDown className="h-4 w-4" />
    </button>
  );
}

export function DashboardPreview() {
  const [view, setView] = useState<"grid" | "list">("grid");

  return (
    <section id="products" className="scroll-mt-24 bg-surface py-12 sm:py-16">
      <div className="container-page">
        <Reveal>
          <div className="overflow-hidden rounded-[1.6rem] border border-border bg-surface-tint p-3 shadow-soft-lg sm:p-4">
            {/* device top bar */}
            <div className="flex items-center gap-2 px-2 pb-3 pt-1">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF6058]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
              <span className="mx-auto rounded-full bg-white px-4 py-1 text-xs font-medium text-ink-muted">
                app.dropspy.com/products
              </span>
            </div>

            <div className="rounded-2xl bg-white p-4 sm:p-5">
              {/* Toolbar */}
              <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
                <div className="flex h-11 flex-1 items-center gap-2 rounded-xl border border-border bg-surface-tint px-3.5">
                  <Search className="h-4 w-4 text-ink-muted" />
                  <input
                    type="text"
                    placeholder="Search…"
                    className="w-full bg-transparent text-sm text-ink placeholder:text-ink-muted focus:outline-none"
                    aria-label="Search products"
                  />
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <FilterChip
                    icon={<Globe className="h-4 w-4" />}
                    label="Countries"
                  />
                  <FilterChip
                    icon={<LayoutGrid className="h-4 w-4" />}
                    label="Platform"
                  />
                  <FilterChip
                    icon={<SlidersHorizontal className="h-4 w-4" />}
                    label="Advanced filters"
                  />

                  <button
                    type="button"
                    className="inline-flex h-11 items-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(29,63,230,0.28)] transition-colors hover:bg-primary-hover"
                  >
                    <Search className="h-4 w-4" />
                    Search
                  </button>

                  {/* view toggle */}
                  <div className="inline-flex h-11 items-center rounded-xl border border-border bg-white p-1">
                    <button
                      type="button"
                      aria-label="Grid view"
                      aria-pressed={view === "grid"}
                      onClick={() => setView("grid")}
                      className={`grid h-full w-9 place-items-center rounded-lg transition-colors ${
                        view === "grid"
                          ? "bg-primary text-white"
                          : "text-ink-muted hover:text-ink"
                      }`}
                    >
                      <LayoutGrid className="h-4 w-4" />
                    </button>
                    <button
                      type="button"
                      aria-label="List view"
                      aria-pressed={view === "list"}
                      onClick={() => setView("list")}
                      className={`grid h-full w-9 place-items-center rounded-lg transition-colors ${
                        view === "list"
                          ? "bg-primary text-white"
                          : "text-ink-muted hover:text-ink"
                      }`}
                    >
                      <List className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Product grid */}
              <div
                className={
                  view === "grid"
                    ? "mt-5 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-5"
                    : "mt-5 grid grid-cols-1 gap-3.5 sm:grid-cols-2"
                }
              >
                {PRODUCTS.slice(0, view === "grid" ? 10 : 6).map((product) => (
                  <ProductCard
                    key={product.title}
                    product={product}
                    compact
                  />
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default DashboardPreview;
