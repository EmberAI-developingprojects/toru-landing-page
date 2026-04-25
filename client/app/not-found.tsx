import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";
import { RevealText } from "@/components/motion/reveal-text";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";

export default function NotFound() {
  return (
    <Section className="min-h-[70vh]">
      <div className="flex flex-col items-start gap-6">
        <RevealOnScroll>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-accent">
            404 · No detection
          </span>
        </RevealOnScroll>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text md:text-6xl">
          <RevealText as="span" split="word">
            Out of frame.
          </RevealText>
        </h1>
        <RevealOnScroll delay={0.2}>
          <p className="max-w-xl text-base leading-relaxed text-text-2 md:text-lg">
            The page you&apos;re looking for isn&apos;t in this feed. Try
            heading back to the home view.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.35}>
          <Button href="/" size="lg">
            Back to home
          </Button>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
