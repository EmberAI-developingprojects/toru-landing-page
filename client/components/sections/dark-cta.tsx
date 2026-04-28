import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { RevealText } from "@/components/motion/reveal-text";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";

type DarkCTAProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function DarkCTA({
  eyebrow,
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: DarkCTAProps) {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-[#003a2c] bg-gradient-to-br from-[#00382a] to-[#001a13] px-8 py-16 text-white md:px-16 md:py-24">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(80% 60% at 0% 0%, rgba(0,229,184,0.22) 0%, rgba(0,26,19,0) 60%), radial-gradient(80% 60% at 100% 100%, rgba(107,87,245,0.18) 0%, rgba(0,26,19,0) 60%)",
            }}
          />
          <div className="relative flex flex-col items-start gap-8 text-left md:items-center md:text-center">
            {eyebrow ? (
              <RevealOnScroll>
                <span className="font-mono text-xs uppercase tracking-[0.22em] text-pulse">
                  {eyebrow}
                </span>
              </RevealOnScroll>
            ) : null}
            <h2 className="max-w-3xl text-balance text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
              <RevealText as="span" split="word">
                {title}
              </RevealText>
            </h2>
            {subtitle ? (
              <RevealOnScroll delay={0.2}>
                <p className="max-w-2xl text-pretty text-lg leading-[1.7] text-white/80">
                  {subtitle}
                </p>
              </RevealOnScroll>
            ) : null}
            <RevealOnScroll
              delay={0.3}
              className="flex flex-col items-start gap-4 md:items-center"
            >
              <Link
                href={ctaHref}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-medium tracking-tight text-[#00382a] transition-colors hover:bg-pulse hover:text-[#001a13]"
              >
                {ctaLabel} <ArrowRight size={16} />
              </Link>
              {secondaryLabel && secondaryHref ? (
                <Link
                  href={secondaryHref}
                  className="font-mono text-xs uppercase tracking-[0.22em] text-white/70 underline-offset-4 transition-colors hover:text-pulse hover:underline"
                >
                  {secondaryLabel}
                </Link>
              ) : null}
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
