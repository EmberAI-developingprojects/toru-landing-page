import Link from "next/link";
import {
  ArrowRight,
  Store,
  Boxes,
  HeartPulse,
  Building2,
  GraduationCap,
  Megaphone,
  type LucideIcon,
} from "lucide-react";
import {
  Section,
  SectionEyebrow,
  SectionTitle,
} from "@/components/ui/section";
import { RevealText } from "@/components/motion/reveal-text";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";

type Industry = {
  name: string;
  icon: LucideIcon;
  context: string;
  measures: string[];
  result: string;
};

const industries: Industry[] = [
  {
    name: "Retail",
    icon: Store,
    context:
      "From flagship stores to pop-ups, retail success depends on understanding exactly how customers move and decide.",
    measures: [
      "Footfall & entry/exit counts",
      "Conversion rate vs POS",
      "Dwell time by zone",
      "Queue length & abandonment",
    ],
    result:
      "Increase conversion rates and reduce queue abandonment by up to 30%.",
  },
  {
    name: "Warehouse",
    icon: Boxes,
    context:
      "In high-throughput operations, safety and efficiency can't be left to manual checks.",
    measures: [
      "Zone occupancy & compliance",
      "Worker throughput by area",
      "Equipment utilization",
      "Safety incident detection",
    ],
    result:
      "Reduce compliance incidents and optimize throughput with zero extra sensors.",
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    context:
      "Patient flow and space utilization directly impact care quality and operating costs.",
    measures: [
      "Patient flow & wait times",
      "Room & bed occupancy",
      "Access control events",
      "Crowd density alerts",
    ],
    result:
      "Cut patient wait times and optimize ward utilization in real time.",
  },
  {
    name: "Government",
    icon: Building2,
    context:
      "Public safety and crowd management at scale requires always-on intelligence.",
    measures: [
      "Crowd density & flow",
      "Perimeter breach detection",
      "Occupancy reporting",
      "Emergency response triggers",
    ],
    result:
      "Deliver compliance-grade crowd analytics with full video anonymization.",
  },
  {
    name: "Education",
    icon: GraduationCap,
    context:
      "Campus safety and space efficiency are constant operational priorities.",
    measures: [
      "Campus occupancy & access events",
      "Library & common area usage",
      "Safety alert zones",
      "Attendance flow patterns",
    ],
    result:
      "Improve campus safety response times with real-time zone alerts.",
  },
  {
    name: "OOH Advertising",
    icon: Megaphone,
    context:
      "Audience measurement is the foundation of every DOOH campaign ROI claim.",
    measures: [
      "Audience counts by location & time",
      "Demographic estimates (anonymized)",
      "Dwell time in front of display",
      "Campaign reach vs footfall benchmarks",
    ],
    result:
      "Prove campaign performance with real audience data, not estimates.",
  },
];

export function IndustryDeepDives() {
  return (
    <Section className="bg-dot-grid">
      <div className="flex flex-col gap-6">
        <SectionEyebrow>By industry</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            Every space has different questions. Toru has the answers.
          </RevealText>
        </SectionTitle>
      </div>

      <div className="mt-16 flex flex-col gap-20">
        {industries.map((industry, i) => (
          <IndustryRow
            key={industry.name}
            industry={industry}
            reverse={i % 2 === 1}
          />
        ))}
      </div>
    </Section>
  );
}

function IndustryRow({
  industry,
  reverse,
}: {
  industry: Industry;
  reverse: boolean;
}) {
  const Icon = industry.icon;
  return (
    <div
      className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
        reverse ? "md:[&>:first-child]:order-2" : ""
      }`}
    >
      <RevealOnScroll className="flex flex-col gap-5">
        <h3 className="text-balance text-4xl font-semibold leading-tight tracking-tight text-text md:text-5xl">
          {industry.name}
        </h3>
        <p className="text-[17px] leading-[1.7] text-text-2 md:text-lg">
          {industry.context}
        </p>

        <div className="mt-2">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            What Toru measures
          </p>
          <ul className="mt-3 flex flex-col gap-2.5">
            {industry.measures.map((m) => (
              <li
                key={m}
                className="flex items-start gap-3 text-[15px] leading-[1.6] text-text-2"
              >
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                {m}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 rounded-xl border border-accent/30 bg-accent-soft p-5">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
            Key result
          </p>
          <p className="mt-2 text-lg font-semibold leading-snug text-text">
            {industry.result}
          </p>
        </div>

        <Link
          href="/contact"
          className="mt-2 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent transition-colors hover:text-accent-hover"
        >
          Learn more <ArrowRight size={14} />
        </Link>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-2xl border border-border bg-canvas shadow-[0_1px_4px_rgba(11,11,16,0.06)]">
          <div
            aria-hidden
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(rgba(0,144,110,0.18) 1px, transparent 1px)",
              backgroundSize: "18px 18px",
            }}
          />
          <span className="grid size-24 place-items-center rounded-2xl bg-accent-soft text-accent">
            <Icon size={44} />
          </span>
          <span className="absolute bottom-5 left-6 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
            {industry.name.toLowerCase()} · live
          </span>
        </div>
      </RevealOnScroll>
    </div>
  );
}
