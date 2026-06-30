"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/asset";

/**
 * Renders a real <img> when its source loads, and gracefully falls back to the
 * provided node (an emoji / colored block) if the file is missing or errors.
 * Supports both local paths (prefixed by assetPath) and absolute URLs
 * (e.g. https://images.unsplash.com/...) which are passed through as-is.
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

  // Absolute URLs (http/https) are used directly; relative paths get the basePath prefix
  const resolvedSrc = /^https?:\/\//.test(src) ? src : assetPath(src);

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolvedSrc}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={className}
    />
  );
}

export default SmartImage;
