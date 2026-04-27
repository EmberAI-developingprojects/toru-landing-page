import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/motion/reveal-text";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";

const industryPills = [
  "Retail",
  "Warehouse",
  "Healthcare",
  "Government",
  "Education",
  "OOH Advertising",
];

export function Hero() {
  return (
    <>
      <section className="relative isolate flex min-h-[88vh] w-full items-center justify-center overflow-hidden border-b border-border text-white">
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[#00382a] to-[#001a13]"
        />
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero-bg.mp4"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-[#001a13]/70"
        />

        <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-28 text-center md:px-10 md:py-36">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 rounded-full border border-pulse/40 bg-pulse/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-pulse backdrop-blur">
              <span className="size-1.5 rounded-full bg-pulse shadow-[0_0_10px_var(--color-pulse)]" />
              Real-time video intelligence
            </span>
          </RevealOnScroll>

          <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">
            <RevealText as="span" split="word">
              Turn any camera into an AI analyst.
            </RevealText>
          </h1>

          <RevealOnScroll delay={0.2} className="mt-7 max-w-2xl">
            <p className="text-pretty text-lg leading-[1.7] text-white/80 md:text-xl">
              Toru connects to your existing IP cameras and delivers live
              operational intelligence — people counting, dwell time, queue
              management, and more. No new hardware. No rip-and-replace.
            </p>
          </RevealOnScroll>

          <RevealOnScroll
            delay={0.3}
            className="mt-10 grid w-full max-w-3xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            <StatChip value="<100ms" label="inference latency" />
            <StatChip value=">95%" label="detection accuracy" />
            <StatChip value="Any IP camera" label="360p and up" />
          </RevealOnScroll>

          <RevealOnScroll
            delay={0.4}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button href="/contact" size="lg" className="px-8">
              Book a demo <ArrowRight size={16} />
            </Button>
            <Button
              href="#how-it-works"
              variant="outline"
              size="lg"
              className="border-white/40 bg-transparent px-8 text-white hover:border-pulse hover:text-pulse"
            >
              See how it works
            </Button>
          </RevealOnScroll>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#001a13]"
        />
      </section>

      <IndustryMarquee />
    </>
  );
}

function StatChip({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-2xl border border-pulse/40 bg-white/5 px-5 py-4 backdrop-blur-sm">
      <span className="font-mono text-base tracking-tight text-white md:text-lg">
        {value}
      </span>
      <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/60">
        {label}
      </span>
    </div>
  );
}

function IndustryMarquee() {
  const items = [...industryPills, ...industryPills];
  return (
    <div className="relative overflow-hidden border-b border-border bg-canvas py-6">
      <div className="flex w-max animate-marquee-x gap-3 whitespace-nowrap">
        {items.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-canvas px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-text-2"
          >
            <span className="size-1.5 rounded-full bg-accent" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
