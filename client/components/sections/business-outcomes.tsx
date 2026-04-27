import {
  Section,
  SectionEyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/section";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/reveal-on-scroll";
import { RevealText } from "@/components/motion/reveal-text";

const outcomes = [
  "Increase sales conversion rates",
  "Reduce queue abandonment",
  "Optimize staff scheduling",
  "Improve customer dwell and spend",
  "Identify underperforming zones",
  "Prevent shrinkage and unauthorized access",
  "Plan maintenance and space efficiently",
  "Make marketing decisions from real footfall data",
  "Meet compliance and safety standards in real time",
  "Scale from one camera to hundreds, instantly",
];

export function BusinessOutcomes() {
  return (
    <Section className="bg-dot-grid">
      <div className="flex flex-col gap-6">
        <SectionEyebrow>The Toru advantage</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            Built to move the metrics that matter.
          </RevealText>
        </SectionTitle>
        <SectionLead>
          Every signal Toru extracts is engineered to drive an operational
          decision — not just to populate a chart.
        </SectionLead>
      </div>

      <StaggerGroup
        className="mt-14 grid gap-x-8 gap-y-2 md:grid-cols-2"
        stagger={0.06}
      >
        {outcomes.map((text, i) => (
          <StaggerItem
            key={text}
            className="relative overflow-hidden border-b border-border py-7"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute -left-2 top-1 select-none font-mono text-5xl font-semibold tracking-tight text-accent opacity-20 md:text-6xl"
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <p className="relative pl-16 text-lg leading-[1.6] text-text md:pl-20 md:text-xl">
              {text}
            </p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
