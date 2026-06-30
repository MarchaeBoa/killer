import { MoreHorizontal, TrendingUp } from "lucide-react";
import { Sparkline } from "./Sparkline";
import { Button } from "./Button";
import { asset } from "@/lib/asset";

export type Product = {
  title: string;
  emoji: string;
  /** Path (under public/) to the product illustration. Falls back to emoji. */
  image?: string;
  stock: number;
  supplier: string;
  country: string;
  flag: string;
  price: string;
  sales: number;
  trend?: number[];
  tone?: "blue" | "pink";
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

function Row({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-center justify-between text-sm">
      <span className="text-ink-muted">{label}</span>
      <span className="font-semibold text-ink">{value}</span>
    </div>
  );
}

export function ProductCard({
  product,
  compact = false,
  className,
}: {
  product: Product;
  compact?: boolean;
  className?: string;
}) {
  const tone = product.tone ?? "blue";
  const imageBg =
    tone === "pink"
      ? "from-accent-pink/15 to-accent-coral/15"
      : "from-primary-soft to-surface-tint";

  return (
    <div
      className={cx(
        "flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-soft transition-shadow duration-300 hover:shadow-soft-lg",
        className,
      )}
    >
      {/* Image */}
      <div
        className={cx(
          "relative flex items-center justify-center overflow-hidden bg-gradient-to-br",
          imageBg,
          compact ? "h-24" : "h-32",
        )}
      >
        {product.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={asset(product.image)}
            alt={product.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            className={compact ? "text-4xl" : "text-5xl"}
            aria-hidden="true"
          >
            {product.emoji}
          </span>
        )}
        <span className="absolute right-2.5 top-2.5 inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[11px] font-semibold text-success backdrop-blur-sm">
          <TrendingUp className="h-3 w-3" /> Hot
        </span>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col gap-2 p-3.5">
        <h4 className="truncate text-sm font-bold text-ink" title={product.title}>
          {product.title}
        </h4>

        <div className="space-y-1.5">
          <Row label="Stock" value={product.stock.toLocaleString("en-US")} />
          <Row label="Supplier" value={product.supplier} />
          <Row
            label="Country"
            value={
              <span className="inline-flex items-center gap-1.5">
                <span aria-hidden="true">{product.flag}</span>
                {product.country}
              </span>
            }
          />
          <Row
            label="Price"
            value={<span className="text-primary">{product.price}</span>}
          />
        </div>

        <div className="mt-1 flex items-center justify-between rounded-xl bg-surface-tint px-3 py-2">
          <div className="leading-tight">
            <p className="text-[11px] font-medium text-ink-muted">30-day sales</p>
            <p className="text-base font-extrabold text-ink">
              {product.sales.toLocaleString("en-US")}
            </p>
          </div>
          <Sparkline
            data={product.trend}
            stroke={tone === "pink" ? "#FF4D8D" : "#1D3FE6"}
          />
        </div>

        {/* Footer */}
        <div className="mt-1.5 flex items-center gap-2">
          <Button
            href="/signup"
            size="sm"
            className="h-9 flex-1 text-[0.8rem]"
          >
            View details
          </Button>
          <button
            type="button"
            aria-label="More options"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border text-ink-muted transition-colors hover:border-primary hover:text-primary"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
