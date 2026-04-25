import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/motion/reveal-text";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { HeroIllustration } from "./hero-illustration";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <BackdropFade />
      <div className="relative mx-auto grid w-full max-w-6xl gap-14 px-6 pt-16 pb-20 md:grid-cols-[1.05fr_1fr] md:gap-14 md:px-10 md:pt-28 md:pb-32">
        <div className="flex flex-col justify-center">
          <RevealOnScroll>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-canvas px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              <span className="size-1.5 rounded-full bg-accent" />
              Computer vision · No new hardware
            </span>
          </RevealOnScroll>

          <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.03] tracking-tight text-text md:text-7xl">
            <RevealText as="span" split="word">
              Any camera.
            </RevealText>{" "}
            <RevealText
              as="span"
              split="word"
              delay={0.15}
              className="text-accent"
            >
              Real-time intelligence.
            </RevealText>
          </h1>

          <RevealOnScroll delay={0.3} className="mt-6 max-w-xl">
            <p className="text-pretty text-base leading-relaxed text-text-2 md:text-lg">
              Toru extracts live, actionable data from the video feeds you
              already have — dwell time, occupancy, customer count, queue
              length, and more. No new hardware. No rip-and-replace. Just
              cameras, internet, and insight.
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.45} className="mt-9 flex flex-wrap items-center gap-3">
            <Button href="/contact" size="lg">
              Book a demo <ArrowRight size={16} />
            </Button>
            <Button href="/technology" variant="outline" size="lg">
              See the technology
            </Button>
          </RevealOnScroll>

          <RevealOnScroll
            delay={0.6}
            className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-border pt-6"
            as="div"
          >
            <Metric value="<100ms" label="Inference" />
            <Metric value=">95%" label="Detection" />
            <Metric value="Any" label="IP camera" />
          </RevealOnScroll>
        </div>

        <div className="relative">
          <RevealOnScroll delay={0.25} y={40}>
            <HeroIllustration />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-lg tracking-tight text-text md:text-xl">
        {value}
      </span>
      <span className="text-xs uppercase tracking-[0.18em] text-muted">
        {label}
      </span>
    </div>
  );
}

function BackdropFade() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "radial-gradient(60% 50% at 80% 20%, rgba(0,144,110,0.08) 0%, rgba(255,255,255,0) 60%), radial-gradient(50% 50% at 20% 80%, rgba(107,87,245,0.05) 0%, rgba(255,255,255,0) 60%)",
      }}
    />
  );
}
