import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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

const industries = [
  {
    label: "Retail & Cafés",
    outcome: "Cut queue waits 30%",
    detail: "Queue length, conversion, dwell, peak hours.",
  },
  {
    label: "Offices",
    outcome: "Reclaim 20% of desks",
    detail: "Desk utilization, room occupancy, attendance.",
  },
  {
    label: "Buildings",
    outcome: "Live people-flow",
    detail: "Entry / exit, crowd density, safety alerts.",
  },
  {
    label: "Manufacturing",
    outcome: "Zone & PPE compliance",
    detail: "Zone violations, PPE detection, equipment use.",
  },
  {
    label: "Events",
    outcome: "Heatmaps & flow",
    detail: "Flow analysis, heatmaps, peak detection.",
  },
  {
    label: "Hospitality",
    outcome: "Smarter staffing",
    detail: "Arrival patterns, lobby dwell, service times.",
  },
];

export function Industries() {
  return (
    <Section>
      <div className="flex flex-col gap-6">
        <SectionEyebrow>Built for every space</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            One platform. Six industries. Endless rooms.
          </RevealText>
        </SectionTitle>
        <SectionLead>
          Wherever there are cameras and people, there are decisions waiting on
          better data. Toru ships outcomes, not dashboards full of noise.
        </SectionLead>
      </div>

      <StaggerGroup
        className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.06}
      >
        {industries.map((i) => (
          <StaggerItem
            key={i.label}
            className="group relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-2xl border border-border bg-canvas p-6 transition-[transform,border-color,box-shadow] duration-300 hover:-translate-y-0.5 hover:border-border-strong hover:shadow-(--shadow-card)"
          >
            <Link href="/solutions" className="absolute inset-0" aria-label={i.label} />
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-text">
                {i.label}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-text-2">
                {i.detail}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                {i.outcome}
              </span>
              <ArrowUpRight
                size={16}
                className="text-muted transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
              />
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
