"use client";

import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { CountUp } from "@/components/ui/CountUp";
import { ProductCard } from "@/components/ui/ProductCard";
import { useProducts, useT } from "@/lib/i18n";

function ProductCluster() {
  const t = useT();
  const products = useProducts();
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-md">
      {/* back card */}
      <div className="absolute right-0 top-6 w-56 rotate-3">
        <ProductCard product={products[2]} compact />
      </div>
      {/* front card */}
      <div className="absolute left-0 top-20 w-60 -rotate-2 drop-shadow-xl">
        <ProductCard product={products[0]} compact />
      </div>

      {/* TikTok badge */}
      <div className="absolute left-6 top-2 grid h-12 w-12 place-items-center rounded-2xl bg-ink text-sm font-extrabold text-white shadow-soft-lg">
        TT
      </div>

      {/* Sales stat card */}
      <div className="absolute -bottom-2 right-2 w-52 rounded-2xl border border-border bg-white p-4 shadow-soft-lg">
        <div className="flex items-center gap-2 text-xs text-ink-muted">
          <CalendarDays className="h-3.5 w-3.5" />
          {t.featureProducts.date}
        </div>
        <p className="mt-1.5 text-2xl font-extrabold text-ink">
          <CountUp value={458235} prefix="$" separator />
        </p>
        <p className="text-xs font-medium text-success">
          {t.featureProducts.salesStat}
        </p>
      </div>
    </div>
  );
}

export function FeatureProducts() {
  const t = useT();
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              {t.featureProducts.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
              <span className="text-primary">{t.featureProducts.titleA}</span>{" "}
              <span className="text-ink">{t.featureProducts.titleB}</span>
            </h2>
            <p className="mt-5 max-w-md text-lg text-ink-muted">
              {t.featureProducts.text}
            </p>
            <div className="mt-8">
              <Button href="/signup" size="lg">
                {t.common.getStarted}
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <ProductCluster />
        </Reveal>
      </div>
    </section>
  );
}

export default FeatureProducts;
