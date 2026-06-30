"use client";

import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  motion,
} from "framer-motion";
import { useEffect, useRef } from "react";

type CountUpProps = {
  /** Target number to count to, e.g. 234 for "234K". */
  value: number;
  prefix?: string;
  suffix?: string;
  /** Decimal places to render. */
  decimals?: number;
  duration?: number;
  className?: string;
  /** Group thousands with commas (e.g. 100000 -> 100,000). */
  separator?: boolean;
};

export function CountUp({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1.6,
  className,
  separator = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const count = useMotionValue(0);

  const formatted = useTransform(count, (latest) => {
    const fixed = latest.toFixed(decimals);
    if (!separator) return `${prefix}${fixed}${suffix}`;
    const [intPart, decPart] = fixed.split(".");
    const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${prefix}${decPart ? `${grouped}.${decPart}` : grouped}${suffix}`;
  });

  useEffect(() => {
    if (!inView) return;
    if (reduceMotion) {
      count.set(value);
      return;
    }
    const controls = animate(count, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
    });
    return () => controls.stop();
  }, [inView, value, duration, reduceMotion, count]);

  return (
    <motion.span ref={ref} className={className}>
      {formatted}
    </motion.span>
  );
}

export default CountUp;
