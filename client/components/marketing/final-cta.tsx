import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/motion/reveal-text";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";

export function FinalCTA() {
  return (
    <section className="relative px-6 py-24 md:px-10 md:py-32">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border border-border bg-[#0b0b10] px-8 py-16 text-white md:px-16 md:py-24 dark:border-[#23232e] dark:bg-[#13131a]">
        <Glow />
        <div className="relative flex flex-col items-start gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-xl">
            <RevealOnScroll>
              <span className="font-mono text-xs uppercase tracking-[0.22em] text-teal">
                Ready when you are
              </span>
            </RevealOnScroll>
            <h2 className="mt-4 text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              <RevealText as="span" split="word">
                Ready to see what your cameras already know?
              </RevealText>
            </h2>
            <RevealOnScroll delay={0.3}>
              <p className="mt-5 text-pretty text-base leading-relaxed text-white/70 md:text-lg">
                Pilot in days, not quarters. Bring one feed — we&apos;ll show
                you what Toru extracts, live, in your space.
              </p>
            </RevealOnScroll>
          </div>
          <RevealOnScroll
            delay={0.45}
            className="flex flex-col gap-3 sm:flex-row md:flex-col md:items-end"
          >
            <Button href="/contact" size="lg">
              Book a demo <ArrowRight size={16} />
            </Button>
            <Button
              href="/technology"
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/10"
            >
              See the technology
            </Button>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function Glow() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0"
      style={{
        background:
          "radial-gradient(80% 60% at 0% 0%, rgba(0,229,184,0.22) 0%, rgba(11,11,16,0) 60%), radial-gradient(80% 60% at 100% 100%, rgba(107,87,245,0.2) 0%, rgba(11,11,16,0) 60%)",
      }}
    />
  );
}
