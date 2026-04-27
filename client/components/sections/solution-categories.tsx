import { BarChart2, Users, Shield, type LucideIcon } from "lucide-react";
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

type Category = {
  icon: LucideIcon;
  title: string;
  borderTop: string;
  iconWrap: string;
  services: string[];
};

const categories: Category[] = [
  {
    icon: BarChart2,
    title: "Operational Intelligence",
    borderTop: "border-t-violet",
    iconWrap: "bg-violet/10 text-violet",
    services: [
      "People Counting & Footfall Analytics",
      "Staffing & Labor Optimization",
      "Queue & Wait Time Management",
      "Speed of Service Tracking",
    ],
  },
  {
    icon: Users,
    title: "Customer Experience & Strategy",
    borderTop: "border-t-accent",
    iconWrap: "bg-accent-soft text-accent",
    services: [
      "Dwell Time & Journey Mapping",
      "Space & Layout Utilization",
      "Customer Retention & Loyalty Analytics",
      "Sales Conversion Analytics (POS)",
    ],
  },
  {
    icon: Shield,
    title: "Core & Security",
    borderTop: "border-t-text",
    iconWrap: "bg-text/5 text-text",
    services: [
      "Predictive Forecasting",
      "Real-Time Anomaly Alerts",
      "Physical Security & Asset Protection",
      "Video Anonymization & Privacy",
    ],
  },
];

export function SolutionCategories() {
  return (
    <Section id="categories" className="bg-canvas">
      <div className="flex flex-col gap-6">
        <SectionEyebrow>What we solve</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            Intelligence across every operation.
          </RevealText>
        </SectionTitle>
      </div>

      <StaggerGroup
        className="mt-14 grid gap-6 lg:grid-cols-3"
        stagger={0.08}
      >
        {categories.map((c) => (
          <StaggerItem
            key={c.title}
            className={`group relative flex h-full flex-col gap-6 rounded-xl border border-border ${c.borderTop} border-t-4 bg-canvas p-7 shadow-[0_1px_4px_rgba(11,11,16,0.06)] transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_-12px_rgba(11,11,16,0.18)]`}
          >
            <span
              className={`grid size-12 place-items-center rounded-lg ${c.iconWrap}`}
            >
              <c.icon size={22} />
            </span>
            <h3 className="text-2xl font-semibold tracking-tight text-text">
              {c.title}
            </h3>
            <ul className="flex flex-col gap-3 border-t border-border pt-5">
              {c.services.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 text-[15px] leading-[1.6] text-text-2"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {s}
                </li>
              ))}
            </ul>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
