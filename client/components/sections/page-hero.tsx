import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/motion/reveal-text";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { cn } from "@/lib/cn";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  background?: "dots" | "grid";
};

export function PageHero({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  background = "dots",
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative w-full py-28 md:py-36",
        background === "dots" ? "bg-dot-grid" : "bg-grid-lines",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-8 px-6 text-left md:px-10">
        <RevealOnScroll>
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent-soft px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </RevealOnScroll>

        <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.04] tracking-tight text-text md:text-7xl">
          <RevealText as="span" split="word">
            {title}
          </RevealText>
        </h1>

        <RevealOnScroll delay={0.2} className="max-w-2xl">
          <p className="text-pretty text-lg leading-[1.7] text-text-2 md:text-xl">
            {subtitle}
          </p>
        </RevealOnScroll>

        {ctaLabel && ctaHref ? (
          <RevealOnScroll delay={0.3}>
            <Button href={ctaHref} size="lg" className="px-8">
              {ctaLabel} <ArrowDown size={16} />
            </Button>
          </RevealOnScroll>
        ) : null}
      </div>
    </section>
  );
}
