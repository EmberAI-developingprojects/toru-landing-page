import {
  Webhook,
  Code2,
  FileSpreadsheet,
  CreditCard,
  Users,
  BarChart3,
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
  RevealOnScroll,
} from "@/components/motion/reveal-on-scroll";
import { RevealText } from "@/components/motion/reveal-text";

type Integration = {
  icon: LucideIcon;
  label: string;
};

const integrations: Integration[] = [
  { icon: Code2, label: "REST API (JSON)" },
  { icon: Webhook, label: "Webhooks (real-time event push)" },
  { icon: FileSpreadsheet, label: "CSV / Excel export" },
  { icon: CreditCard, label: "POS system integration" },
  { icon: Users, label: "Workforce management tools" },
  { icon: BarChart3, label: "BI platforms (Power BI, Tableau)" },
];

const sample = `{
  "zone": "entrance-A",
  "timestamp": "2025-04-27T09:14:32Z",
  "count": 142,
  "dwell_avg_seconds": 38,
  "queue_length": 4,
  "occupancy_pct": 0.71
}`;

export function IntegrationApi() {
  return (
    <Section className="bg-dot-grid">
      <div className="flex flex-col gap-6">
        <SectionEyebrow>Built to integrate</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            API-first. Works with what you already run.
          </RevealText>
        </SectionTitle>
      </div>

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <StaggerGroup className="flex flex-col gap-3" stagger={0.06}>
          {integrations.map((i) => (
            <StaggerItem
              key={i.label}
              className="flex items-center gap-4 rounded-xl border border-border bg-canvas p-4 shadow-[0_1px_4px_rgba(11,11,16,0.06)]"
            >
              <span className="grid size-10 place-items-center rounded-full bg-accent-soft text-accent">
                <i.icon size={18} />
              </span>
              <span className="text-[15px] leading-[1.5] text-text">
                {i.label}
              </span>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <RevealOnScroll delay={0.2}>
          <div className="overflow-hidden rounded-2xl border border-[#003a2c] bg-[#001a13] shadow-[0_18px_40px_-18px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
                <span className="size-2.5 rounded-full bg-white/20" />
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-pulse">
                GET /v1/zones/entrance-A
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-white/50">
                200 OK
              </span>
            </div>
            <pre className="overflow-x-auto px-6 py-6 font-mono text-[13px] leading-[1.7] text-white/85">
              <code>{sample}</code>
            </pre>
          </div>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
