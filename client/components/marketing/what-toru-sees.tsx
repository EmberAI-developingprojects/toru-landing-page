import {
  Users,
  Clock,
  CalendarClock,
  Gauge,
  Footprints,
  LayoutGrid,
  ShoppingCart,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";
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

type Capability = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const operational: Capability[] = [
  {
    icon: Users,
    title: "People Counting & Footfall",
    description:
      "Track visitor volume, entry/exit flow, and hourly patterns across all locations.",
  },
  {
    icon: Clock,
    title: "Queue & Wait Time",
    description:
      "Detect queue length in real time and trigger staff alerts before service degrades.",
  },
  {
    icon: CalendarClock,
    title: "Staffing Optimization",
    description:
      "Match labor allocation to live foot traffic data. Cut idle time. Reduce overstaffing costs.",
  },
  {
    icon: Gauge,
    title: "Speed of Service",
    description:
      "Measure transaction times and service throughput per zone, per hour.",
  },
];

const customer: Capability[] = [
  {
    icon: Footprints,
    title: "Dwell Time & Journey",
    description:
      "Understand where visitors linger, what they skip, and how layout drives behavior.",
  },
  {
    icon: LayoutGrid,
    title: "Space Utilization",
    description:
      "Identify underused zones and optimize floor plans with heat map overlays.",
  },
  {
    icon: ShoppingCart,
    title: "Sales Conversion (POS)",
    description:
      "Correlate footfall with POS data to compute true conversion rates per zone.",
  },
  {
    icon: ShieldAlert,
    title: "Anomaly & Security Alerts",
    description:
      "Real-time alerts for unauthorized access, crowd density spikes, and safety incidents.",
  },
];

export function WhatToruSees() {
  return (
    <Section className="bg-canvas">
      <div className="flex flex-col gap-6">
        <SectionEyebrow>Capabilities</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            Make every camera count.
          </RevealText>
        </SectionTitle>
        <SectionLead>
          Live metrics from your existing IP cameras. Setup in minutes. Insight in real time.
        </SectionLead>
      </div>

      <CapabilityRow
        eyebrow="Operational intelligence"
        items={operational}
      />
      <CapabilityRow
        eyebrow="Customer & strategic"
        items={customer}
        className="mt-12"
      />
    </Section>
  );
}

function CapabilityRow({
  eyebrow,
  items,
  className,
}: {
  eyebrow: string;
  items: Capability[];
  className?: string;
}) {
  return (
    <div className={className ?? "mt-14"}>
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        {eyebrow}
      </p>
      <StaggerGroup
        className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.07}
      >
        {items.map(({ icon: Icon, title, description }) => (
          <StaggerItem
            key={title}
            className="group relative flex h-full flex-col gap-5 rounded-xl border border-border bg-canvas p-6 shadow-[0_1px_4px_rgba(11,11,16,0.06)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(11,11,16,0.18)]"
          >
            <span className="grid size-11 place-items-center rounded-lg bg-accent-soft text-accent">
              <Icon size={20} />
            </span>
            <div>
              <h3 className="text-base font-semibold tracking-tight text-text">
                {title}
              </h3>
              <p className="mt-2 text-[14px] leading-[1.6] text-text-2">
                {description}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </div>
  );
}
