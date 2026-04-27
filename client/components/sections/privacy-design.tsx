import {
  ServerCog,
  Eye,
  ShieldCheck,
  ScrollText,
  Camera,
  Cloud,
  type LucideIcon,
} from "lucide-react";
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
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";

type Principle = {
  icon: LucideIcon;
  title: string;
  body: string;
};

const principles: Principle[] = [
  {
    icon: ServerCog,
    title: "On-premise processing",
    body: "AI runs locally. Video never leaves your network.",
  },
  {
    icon: Eye,
    title: "Zero raw video transmitted",
    body: "Only anonymized event data reaches the cloud.",
  },
  {
    icon: ShieldCheck,
    title: "Video anonymization",
    body: "Faces and identifiable features are blurred at the edge before any data is stored.",
  },
  {
    icon: ScrollText,
    title: "GDPR-ready architecture",
    body: "Built for compliance from day one.",
  },
];

export function PrivacyDesign() {
  return (
    <Section className="bg-dot-grid">
      <div className="flex flex-col gap-6">
        <SectionEyebrow>Privacy by design</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            Your footage stays where it belongs.
          </RevealText>
        </SectionTitle>
      </div>

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <StaggerGroup className="flex flex-col gap-5" stagger={0.08}>
          {principles.map((p) => (
            <StaggerItem
              key={p.title}
              className="flex items-start gap-5 rounded-xl border border-border bg-canvas p-6 shadow-[0_1px_4px_rgba(11,11,16,0.06)]"
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent">
                <p.icon size={20} />
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-tight text-text">
                  {p.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-[1.6] text-text-2">
                  {p.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <RevealOnScroll delay={0.2}>
          <DataFlowDiagram />
        </RevealOnScroll>
      </div>
    </Section>
  );
}

function DataFlowDiagram() {
  return (
    <div className="rounded-2xl border border-border bg-canvas p-6 shadow-[0_8px_24px_-12px_rgba(11,11,16,0.18)] md:p-8">
      <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        Data flow
      </p>
      <h4 className="mt-2 text-xl font-semibold tracking-tight text-text">
        Camera → On-Premise AI → Metadata only → Cloud
      </h4>

      <ol className="mt-7 flex flex-col gap-3">
        <FlowStep
          icon={Camera}
          label="Camera"
          tag="raw video"
          tone="text"
        />
        <FlowConnector />
        <FlowStep
          icon={ServerCog}
          label="On-Premise AI"
          tag="processes locally"
          tone="accent"
        />
        <FlowConnector />
        <FlowStep
          icon={ScrollText}
          label="Metadata extracted"
          tag="anonymized only"
          tone="violet"
        />
        <FlowConnector />
        <FlowStep
          icon={Cloud}
          label="Cloud dashboard"
          tag="counts · events · alerts"
          tone="accent"
        />
      </ol>
    </div>
  );
}

function FlowStep({
  icon: Icon,
  label,
  tag,
  tone,
}: {
  icon: LucideIcon;
  label: string;
  tag: string;
  tone: "accent" | "violet" | "text";
}) {
  const wrap = {
    accent: "bg-accent-soft text-accent",
    violet: "bg-violet/10 text-violet",
    text: "bg-surface text-text",
  }[tone];
  return (
    <li className="flex items-center gap-4 rounded-xl border border-border bg-surface p-4">
      <span className={`grid size-10 place-items-center rounded-lg ${wrap}`}>
        <Icon size={18} />
      </span>
      <div className="flex flex-1 flex-col">
        <span className="text-sm font-medium text-text">{label}</span>
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
          {tag}
        </span>
      </div>
    </li>
  );
}

function FlowConnector() {
  return (
    <li
      aria-hidden
      className="ml-5 h-5 w-px self-start bg-border-strong"
    />
  );
}
