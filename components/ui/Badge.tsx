import type { ReactNode } from "react";

type BadgeVariant = "soft" | "outline" | "success" | "gradient" | "translucent";

const variants: Record<BadgeVariant, string> = {
  soft: "bg-primary-soft text-primary",
  outline: "border border-border bg-white text-ink-muted shadow-soft",
  success: "bg-success/10 text-success",
  gradient: "text-gradient-badge text-white shadow-soft",
  translucent: "bg-white/15 text-white backdrop-blur-sm",
};

function cx(...parts: Array<string | undefined | false>) {
  return parts.filter(Boolean).join(" ");
}

export function Badge({
  children,
  variant = "soft",
  className,
}: {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}) {
  return (
    <span
      className={cx(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold leading-none",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Badge;
