"use client";

import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useT } from "@/lib/i18n";

export function FinalCta() {
  const t = useT();
  return (
    <section className="bg-surface py-16 sm:py-24">
      <div className="container-page">
        <Reveal>
          <div className="relative overflow-hidden rounded-[1.6rem] bg-primary-soft px-6 py-14 text-center sm:px-12 sm:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-2xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-accent-pink/10 blur-2xl"
            />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl text-3xl sm:text-4xl lg:text-5xl">
                {t.finalCta.title}
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-lg text-ink-muted">
                {t.finalCta.text}
              </p>
              <div className="mt-9 flex justify-center">
                <Button href="/signup" size="lg" className="px-12">
                  {t.common.getStarted}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default FinalCta;
