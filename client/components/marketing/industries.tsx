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
    label: "Retail",
    detail:
      "Footfall, conversion, queue, and dwell analytics for every store format.",
  },
  {
    label: "Warehouse",
    detail:
      "Zone compliance, throughput, and safety monitoring at scale.",
  },
  {
    label: "Healthcare",
    detail:
      "Occupancy management, patient flow, and access control.",
  },
  {
    label: "Government",
    detail:
      "Crowd analytics, perimeter security, and compliance reporting.",
  },
  {
    label: "Education",
    detail:
      "Campus occupancy, access events, and safety alerts.",
  },
  {
    label: "OOH Advertising",
    detail:
      "Audience measurement and campaign performance from existing DOOH camera infrastructure.",
  },
];

export function Industries() {
  return (
    <Section className="bg-dot-grid">
      <div className="flex flex-col gap-6">
        <SectionEyebrow>Industries</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            Built for every space.
          </RevealText>
        </SectionTitle>
        <SectionLead>
          Wherever there are cameras and people, there are decisions waiting on
          better data. Toru ships outcomes, not dashboards full of noise.
        </SectionLead>
      </div>

      <StaggerGroup
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        stagger={0.06}
      >
        {industries.map((i) => (
          <StaggerItem
            key={i.label}
            className="group relative flex h-full flex-col justify-between gap-6 rounded-xl border border-border bg-canvas p-6 shadow-[0_1px_4px_rgba(11,11,16,0.06)] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_8px_24px_-12px_rgba(11,11,16,0.18)]"
          >
            <Link href="/solutions" className="absolute inset-0" aria-label={i.label} />
            <div>
              <h3 className="text-xl font-semibold tracking-tight text-text">
                {i.label}
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-text-2">
                {i.detail}
              </p>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-4">
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Learn more
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
