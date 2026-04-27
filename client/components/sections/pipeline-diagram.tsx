import { Fragment } from "react";
import { ChevronRight } from "lucide-react";
import {
  Section,
  SectionEyebrow,
  SectionTitle,
} from "@/components/ui/section";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/reveal-on-scroll";
import { RevealText } from "@/components/motion/reveal-text";

const steps = [
  {
    number: "01",
    name: "Connect",
    body: "Any IP camera on your local network connects instantly. No hardware swaps, no proprietary cameras, no NVR required.",
  },
  {
    number: "02",
    name: "Detect",
    body: "Custom-trained computer vision models run on-premise, analyzing every frame in real time. Optimized for 360p–4K inputs.",
  },
  {
    number: "03",
    name: "Extract",
    body: "Only anonymized event metadata is extracted — counts, timestamps, zone IDs, and behavioral signals. Raw video never moves.",
  },
  {
    number: "04",
    name: "Deliver",
    body: "Extracted data streams to your Toru dashboard and mobile app.",
  },
];

export function PipelineDiagram() {
  return (
    <Section className="bg-canvas">
      <div className="flex flex-col gap-6">
        <SectionEyebrow>The pipeline</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            From raw video to actionable insight.
          </RevealText>
        </SectionTitle>
      </div>

      <StaggerGroup
        className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]"
        stagger={0.08}
      >
        {steps.map((step, i) => (
          <Fragment key={step.number}>
            <StaggerItem className="group relative flex h-full flex-col gap-5 rounded-xl border border-border bg-canvas p-7 shadow-[0_1px_4px_rgba(11,11,16,0.06)] transition-[border-color,box-shadow] duration-300 hover:border-accent/50 hover:shadow-[0_8px_24px_-12px_rgba(11,11,16,0.18)]">
              <span className="font-mono text-4xl font-semibold tracking-tight text-accent">
                {step.number}
              </span>
              <h3 className="font-mono text-sm uppercase tracking-[0.22em] text-text">
                {step.name}
              </h3>
              <p className="text-[15px] leading-[1.7] text-text-2">
                {step.body}
              </p>
            </StaggerItem>
            {i < steps.length - 1 ? (
              <div
                className="hidden items-center justify-center text-accent lg:flex"
                aria-hidden
              >
                <ChevronRight size={28} />
              </div>
            ) : null}
          </Fragment>
        ))}
      </StaggerGroup>
    </Section>
  );
}
