"use client";

import { Filter, Radio, Rocket } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkline } from "@/components/ui/Sparkline";
import { useT } from "@/lib/i18n";

function FindMockup() {
  return (
    <div className="space-y-2 rounded-xl border border-border bg-white p-3">
      <div className="flex items-center gap-2 rounded-lg bg-surface-tint px-2.5 py-1.5">
        <Filter className="h-3.5 w-3.5 text-primary" />
        <div className="h-2 w-20 rounded-full bg-border" />
      </div>
      <div className="grid grid-cols-3 gap-2">
        {[0, 1, 2].map((i) => (
          <div key={i} className="rounded-lg bg-surface-tint p-1.5">
            <div className="mb-1 h-8 rounded-md bg-primary-soft" />
            <div className="h-1.5 w-full rounded-full bg-border" />
          </div>
        ))}
      </div>
    </div>
  );
}

function ValidateMockup() {
  return (
    <div className="space-y-2 rounded-xl border border-border bg-white p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <span className="grid h-6 w-6 place-items-center rounded-full bg-ink text-[9px] font-bold text-white">
            TT
          </span>
          <div className="h-2 w-16 rounded-full bg-border" />
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-semibold text-success">
          <Radio className="h-3 w-3" /> Live
        </span>
      </div>
      <div className="rounded-lg bg-surface-tint p-2">
        <Sparkline data={[3, 5, 4, 8, 7, 12, 10, 16, 19, 24]} width={180} height={36} />
      </div>
    </div>
  );
}

function LaunchMockup() {
  return (
    <div className="space-y-2 rounded-xl border border-border bg-white p-3">
      <div className="flex items-center gap-2">
        <Rocket className="h-4 w-4 text-primary" />
        <div className="h-2 w-24 rounded-full bg-border" />
      </div>
      <div className="rounded-lg bg-surface-tint p-2">
        <div className="mb-1.5 h-10 rounded-md bg-gradient-to-r from-primary to-[#152CB0]" />
        <div className="grid grid-cols-3 gap-1.5">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-5 rounded bg-primary-soft" />
          ))}
        </div>
      </div>
      <div className="h-6 w-full rounded-md bg-primary" />
    </div>
  );
}

const MOCKUPS = [<FindMockup key="f" />, <ValidateMockup key="v" />, <LaunchMockup key="l" />];

export function HowItWorks() {
  const t = useT();

  return (
    <section className="bg-surface-tint py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <h2 className="text-center text-3xl sm:text-4xl">
            {t.howItWorks.title}
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {t.howItWorks.steps.map((step, i) => (
            <Reveal key={step.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-2xl bg-primary-soft p-5">
                <div className="mb-5">{MOCKUPS[i]}</div>
                <h3 className="text-xl font-extrabold text-primary">
                  {step.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
