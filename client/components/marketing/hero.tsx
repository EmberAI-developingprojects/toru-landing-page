import { Button } from "@/components/ui/button";
import { RevealText } from "@/components/motion/reveal-text";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";

export function Hero() {
  return (
    <section className="relative isolate -mt-16 flex min-h-[88vh] w-full items-center justify-center overflow-hidden border-b border-border text-white md:-mt-20">
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
      <div aria-hidden className="absolute inset-0 bg-[#001a13]/70" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-28 text-center md:px-10 md:py-36">
        <RevealOnScroll>
          <span className="inline-flex items-center gap-2 rounded-full border border-pulse/40 bg-pulse/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-pulse backdrop-blur">
            <span className="size-1.5 rounded-full bg-pulse shadow-[0_0_10px_var(--color-pulse)]" />
            Computer vision · object detection
          </span>
        </RevealOnScroll>

        <h1 className="mt-8 max-w-4xl text-balance text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">
          <RevealText as="span" split="word">
            Turn live video into real-time data.
          </RevealText>
        </h1>

        <RevealOnScroll delay={0.2} className="mt-7 max-w-2xl">
          <p className="text-pretty text-lg leading-[1.7] text-white/80 md:text-xl">
            Toru is a computer vision platform. We process live video from
            cameras, drones, or any feed and turn it into operational data in
            real time.
          </p>
        </RevealOnScroll>

        <RevealOnScroll
          delay={0.4}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
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
  );
}
