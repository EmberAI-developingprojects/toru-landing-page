import { Users, Timer, LayoutDashboard, Route } from "lucide-react";
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

const tiles = [
  {
    icon: Users,
    title: "People counting",
    description:
      "Live counts of who enters, exits, and moves between zones — broken down by direction, time, and threshold.",
    metric: "1,284",
    unit: "people today",
  },
  {
    icon: Timer,
    title: "Dwell time",
    description:
      "Measure how long anyone lingers in any area — aisles, displays, queues, meeting rooms — without manual tagging.",
    metric: "4m 32s",
    unit: "avg dwell",
  },
  {
    icon: LayoutDashboard,
    title: "Occupancy",
    description:
      "Real-time headcount per space, with thresholds, alerts, and historical patterns you can act on tomorrow.",
    metric: "47 / 60",
    unit: "current load",
  },
  {
    icon: Route,
    title: "Flow & paths",
    description:
      "Aggregate movement across zones to reveal the routes people take, where they stall, and where they never go.",
    metric: "12",
    unit: "zones tracked",
  },
];

export function WhatToruSees() {
  return (
    <Section>
      <div className="flex flex-col gap-6">
        <SectionEyebrow>What Toru sees</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            Every signal that matters, live.
          </RevealText>
        </SectionTitle>
        <SectionLead>
          Built on custom-trained computer vision models. No tagging, no manual
          setup — point Toru at a camera and start measuring within minutes.
        </SectionLead>
      </div>

      <StaggerGroup
        className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.08}
      >
        {tiles.map(({ icon: Icon, title, description, metric, unit }) => (
          <StaggerItem
            key={title}
            className="group relative flex h-full flex-col gap-8 overflow-hidden rounded-2xl border border-border bg-canvas p-6 shadow-(--shadow-card) transition-[transform,border-color] duration-300 hover:-translate-y-1 hover:border-border-strong"
          >
            <div className="flex items-start justify-between">
              <span className="grid size-11 place-items-center rounded-xl bg-surface text-accent transition-colors group-hover:bg-accent-soft">
                <Icon size={20} />
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                live
              </span>
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold tracking-tight text-text">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-2">
                {description}
              </p>
            </div>

            <div className="flex items-baseline gap-3 border-t border-border pt-4">
              <span className="font-mono text-2xl tabular-nums tracking-tight text-text">
                {metric}
              </span>
              <span className="text-xs uppercase tracking-[0.18em] text-muted">
                {unit}
              </span>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
