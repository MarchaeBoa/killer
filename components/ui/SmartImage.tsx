"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/asset";

/**
 * Renders a real <img> when its source loads, and gracefully falls back to the
 * provided node (an emoji / colored block) if the file is missing or errors.
 * This keeps the UI looking intact before `npm run fetch-images` has populated
 * public/images/, and if any single photo fails to download.
 */
export function SmartImage({
  src,
  alt,
  className,
  fallback = null,
}: {
  src?: string;
  alt: string;
  className?: string;
  fallback?: ReactNode;
}) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) return <>{fallback}</>;

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={assetPath(src)}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export default SmartImage;
