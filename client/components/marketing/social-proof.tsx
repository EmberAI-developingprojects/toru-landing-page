import {
  Section,
  SectionEyebrow,
  SectionTitle,
} from "@/components/ui/section";
import {
  StaggerGroup,
  StaggerItem,
  RevealOnScroll,
} from "@/components/motion/reveal-on-scroll";
import { RevealText } from "@/components/motion/reveal-text";

const stats = [
  { value: "360p+", label: "Works with any camera resolution" },
  { value: "<100ms", label: "Real-time inference latency" },
  { value: "1000+", label: "Supported camera models" },
];

export function SocialProof() {
  return (
    <Section className="bg-canvas">
      <div className="flex flex-col gap-6">
        <SectionEyebrow>Trusted intelligence</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            Deployed across industries and spaces.
          </RevealText>
        </SectionTitle>
      </div>

      <StaggerGroup
        className="mt-14 grid gap-5 sm:grid-cols-3"
        stagger={0.08}
      >
        {stats.map((s) => (
          <StaggerItem
            key={s.value}
            className="flex flex-col items-start gap-3 rounded-xl border border-border bg-canvas p-7 shadow-[0_1px_4px_rgba(11,11,16,0.06)]"
          >
            <span className="font-mono text-4xl font-semibold tracking-tight text-accent md:text-5xl">
              {s.value}
            </span>
            <span className="text-[15px] leading-[1.6] text-text-2">
              {s.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerGroup>

      <RevealOnScroll delay={0.2} className="mt-12">
        <figure className="mx-auto max-w-3xl rounded-2xl border border-border bg-surface p-8 md:p-10">
          <blockquote className="text-pretty text-xl leading-[1.6] text-text md:text-2xl">
            &ldquo;Toru gave us occupancy data we didn&apos;t know we were
            missing. Setup was done in an afternoon.&rdquo;
          </blockquote>
          <figcaption className="mt-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            Operations Manager · Retail Chain
          </figcaption>
        </figure>
      </RevealOnScroll>
    </Section>
  );
}
