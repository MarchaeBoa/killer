import Link from "next/link";
import { Hexagon } from "lucide-react";
import { BRAND } from "@/lib/brand";

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

/** The square brand glyph: a hexagon on a primary tile. */
export function BrandTile({
  size = "md",
  className,
}: {
  size?: "sm" | "md";
  className?: string;
}) {
  const tile = size === "sm" ? "h-8 w-8" : "h-9 w-9";
  const icon = size === "sm" ? "h-4 w-4" : "h-5 w-5";
  return (
    <span
      className={cx(
        "grid place-items-center rounded-xl bg-primary text-white shadow-[0_6px_16px_rgba(29,63,230,0.35)]",
        tile,
        className,
      )}
    >
      <Hexagon className={icon} />
    </span>
  );
}

/** Brand glyph + wordmark, linking to home. Wordmark color is configurable. */
export function BrandMark({
  className,
  wordClassName = "text-ink",
}: {
  className?: string;
  wordClassName?: string;
}) {
  return (
    <Link href="/" className={cx("flex items-center gap-2.5", className)}>
      <BrandTile />
      <span
        className={cx(
          "text-lg font-extrabold tracking-tightest",
          wordClassName,
        )}
      >
        {BRAND}
      </span>
    </Link>
  );
}

export default BrandMark;
