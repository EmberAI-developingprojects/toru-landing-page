import { Boxes, Activity, LineChart, type LucideIcon } from "lucide-react";
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

type Model = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const models: Model[] = [
  {
    icon: Boxes,
    title: "Object Detection",
    body: "Purpose-built detection models trained on diverse real-world camera footage. Handles occlusion, low-light, and crowd density.",
  },
  {
    icon: Activity,
    title: "Behavioral Analysis",
    body: "Tracks movement trajectories and classifies behavioral patterns — dwell, loitering, queue formation, direction of travel.",
  },
  {
    icon: LineChart,
    title: "Predictive Forecasting",
    body: "Time-series models forecast footfall, occupancy, and queue spikes up to 4 hours ahead based on historical patterns.",
  },
];

export function AiModels() {
  return (
    <Section className="bg-canvas">
      <div className="flex flex-col gap-6">
        <SectionEyebrow>Our models</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            Custom-trained for real-world precision.
          </RevealText>
        </SectionTitle>
      </div>

      <StaggerGroup
        className="mt-14 grid gap-5 lg:grid-cols-3"
        stagger={0.08}
      >
        {models.map((m) => (
          <StaggerItem
            key={m.title}
            className="flex h-full flex-col gap-5 rounded-xl border border-border bg-canvas p-7 shadow-[0_1px_4px_rgba(11,11,16,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-12px_rgba(11,11,16,0.18)]"
          >
            <span className="grid size-12 place-items-center rounded-lg bg-accent-soft text-accent">
              <m.icon size={22} />
            </span>
            <h3 className="text-xl font-semibold tracking-tight text-text">
              {m.title}
            </h3>
            <p className="text-[15px] leading-[1.7] text-text-2">{m.body}</p>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
