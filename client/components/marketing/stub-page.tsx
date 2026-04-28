import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { RevealText } from "@/components/motion/reveal-text";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";

type StubPageProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function StubPage({ eyebrow, title, description }: StubPageProps) {
  return (
    <Section className="min-h-[70vh]">
      <div className="flex flex-col items-start gap-8">
        <RevealOnScroll>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-canvas px-3 py-1 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            <span className="size-1.5 rounded-full bg-accent" />
            {eyebrow}
          </span>
        </RevealOnScroll>

        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-text md:text-6xl">
          <RevealText as="span" split="word">
            {title}
          </RevealText>
        </h1>

        <RevealOnScroll delay={0.2}>
          <p className="max-w-2xl text-pretty text-base leading-relaxed text-text-2 md:text-lg">
            {description}
          </p>
        </RevealOnScroll>

        <RevealOnScroll
          delay={0.35}
          className="flex flex-wrap items-center gap-3"
        >
          <a
            href="mailto:info@toru.world"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-accent px-6 text-base font-medium tracking-tight text-canvas transition-colors hover:bg-accent-hover"
          >
            info@toru.world <ArrowRight size={16} />
          </a>
          <Link
            href="/"
            className="inline-flex h-12 items-center px-2 text-sm text-muted transition-colors hover:text-text"
          >
            ← Back to home
          </Link>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
