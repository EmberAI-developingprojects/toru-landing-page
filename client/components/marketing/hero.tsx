import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/motion/reveal-text";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";
import { HeroIllustration } from "./hero-illustration";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-border bg-[#0b0b10] text-white">
      <HeroIllustration bleed />
      <Vignette />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col justify-center px-6 pb-24 pt-28 md:min-h-190 md:px-10 md:pb-32 md:pt-36">
        <div className="max-w-2xl">
          <RevealOnScroll>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-white/70 backdrop-blur">
              <span className="size-1.5 rounded-full bg-pulse shadow-[0_0_10px_var(--color-pulse)]" />
              Computer vision · No new hardware
            </span>
          </RevealOnScroll>

          <h1 className="mt-7 text-balance text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl">
            <RevealText as="span" split="word">
              Any camera.
            </RevealText>{" "}
            <RevealText
              as="span"
              split="word"
              delay={0.15}
              className="text-pulse"
            >
              Real-time intelligence.
            </RevealText>
          </h1>

          <RevealOnScroll delay={0.3} className="mt-7 max-w-xl">
            <p className="text-pretty text-base leading-relaxed text-white/75 md:text-lg">
              Toru extracts live, actionable data from the video feeds you
              already have — dwell time, occupancy, customer count, queue
              length, and more. No new hardware. No rip-and-replace. Just
              cameras, internet, and insight.
            </p>
          </RevealOnScroll>

          <RevealOnScroll
            delay={0.45}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <Button href="/contact" size="lg">
              Book a demo <ArrowRight size={16} />
            </Button>
            <Button
              href="/technology"
              variant="outline"
              size="lg"
              className="border-white/25 text-white hover:border-pulse hover:text-pulse"
            >
              See the technology
            </Button>
          </RevealOnScroll>

          <RevealOnScroll
            delay={0.6}
            className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-6"
          >
            <Metric value="<100ms" label="Inference" />
            <Metric value=">95%" label="Detection" />
            <Metric value="Any" label="IP camera" />
          </RevealOnScroll>
        </div>
      </div>

      <BottomFade />
    </section>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="font-mono text-lg tracking-tight text-white md:text-xl">
        {value}
      </span>
      <span className="text-xs uppercase tracking-[0.18em] text-white/50">
        {label}
      </span>
    </div>
  );
}

function Vignette() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          background:
            "linear-gradient(90deg, rgba(11,11,16,0.92) 0%, rgba(11,11,16,0.78) 28%, rgba(11,11,16,0.45) 55%, rgba(11,11,16,0) 80%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-1"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 30%, rgba(0,229,184,0.10) 0%, rgba(11,11,16,0) 65%), radial-gradient(50% 50% at 20% 80%, rgba(107,87,245,0.10) 0%, rgba(11,11,16,0) 65%)",
        }}
      />
    </>
  );
}

function BottomFade() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 z-2 h-24 bg-linear-to-b from-transparent to-[#0b0b10]"
    />
  );
}
