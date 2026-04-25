"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/cn";

type ShowcaseStep = {
  id: string;
  eyebrow: string;
  title: string;
  body: string;
  visual: React.ReactNode;
};

type StickyShowcaseProps = {
  steps: ShowcaseStep[];
  className?: string;
};

export function StickyShowcase({ steps, className }: StickyShowcaseProps) {
  return (
    <div className={cn("relative", className)}>
      {steps.map((step, i) => (
        <StickyShowcaseStep
          key={step.id}
          step={step}
          index={i}
          total={steps.length}
        />
      ))}
    </div>
  );
}

function StickyShowcaseStep({
  step,
  index,
  total,
}: {
  step: ShowcaseStep;
  index: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    reduce ? [1, 1, 1, 1] : [0, 1, 1, 0],
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    reduce ? [0, 0, 0, 0] : [30, 0, 0, -30],
  );

  return (
    <div ref={ref} className="relative grid gap-10 py-16 md:grid-cols-2 md:gap-16 md:py-24">
      <div className="relative">
        <div className="md:sticky md:top-28">
          <motion.div style={{ opacity, y }}>
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
              {step.eyebrow}
            </span>
            <h3 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              {step.title}
            </h3>
            <p className="mt-5 max-w-lg text-pretty text-base leading-relaxed text-muted md:text-lg">
              {step.body}
            </p>
            <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-muted">
              <span className="text-text">{String(index + 1).padStart(2, "0")}</span>
              <span className="h-px w-8 bg-border-strong" />
              <span>of {String(total).padStart(2, "0")}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative">
        <div className="md:sticky md:top-28">
          <motion.div
            initial={{ opacity: 0, y: reduce ? 0 : 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            {step.visual}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
