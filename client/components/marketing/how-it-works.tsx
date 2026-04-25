import { Camera, Cpu, Monitor, Plug, Wifi } from "lucide-react";
import {
  Section,
  SectionEyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/section";
import { StickyShowcase } from "@/components/motion/sticky-showcase";
import { RevealText } from "@/components/motion/reveal-text";

export function HowItWorks() {
  const steps = [
    {
      id: "connect",
      eyebrow: "Step 01 · Connect",
      title: "Any IP camera. Wherever it lives.",
      body: "RTSP, ONVIF, or your existing VMS. No new hardware to buy, no wiring to redo. Point Toru at the feed and we take it from there.",
      visual: <ConnectVisual />,
    },
    {
      id: "detect",
      eyebrow: "Step 02 · Detect & extract",
      title: "Custom CV models, real-time inference.",
      body: "Toru's models run in the cloud at sub-100ms latency. People, dwell, occupancy, queues, paths — all extracted from raw pixels with no manual tagging.",
      visual: <DetectVisual />,
    },
    {
      id: "deliver",
      eyebrow: "Step 03 · Deliver",
      title: "A dashboard your whole team can act on.",
      body: "Live tiles, historical trends, custom alerts, multi-location roll-ups. Built for operators — no data team required.",
      visual: <DeliverVisual />,
    },
  ];

  return (
    <Section className="bg-surface">
      <div className="flex flex-col gap-6">
        <SectionEyebrow>Works with what you already have</SectionEyebrow>
        <SectionTitle>
          <RevealText as="span" split="word">
            From camera to insight in three steps.
          </RevealText>
        </SectionTitle>
        <SectionLead>
          No rip-and-replace. Toru connects to the cameras already pointed at
          the spaces you care about and turns pixels into measurable signal.
        </SectionLead>
      </div>

      <StickyShowcase className="mt-8" steps={steps} />
    </Section>
  );
}

function VisualShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border bg-canvas shadow-(--shadow-card)">
      {children}
    </div>
  );
}

function ConnectVisual() {
  return (
    <VisualShell>
      <div className="absolute inset-0 p-6">
        <div className="flex h-full flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-2 rounded-full bg-surface px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              <Wifi size={12} /> rtsp · onvif
            </span>
            <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
              <span className="size-1.5 animate-pulse rounded-full bg-accent" />
              connected
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {[
              { name: "Flagship — entrance", id: "cam-001" },
              { name: "Flagship — checkout", id: "cam-002" },
              { name: "Flagship — café", id: "cam-003" },
            ].map((c) => (
              <div
                key={c.id}
                className="flex items-center justify-between rounded-xl border border-border bg-canvas p-3"
              >
                <div className="flex items-center gap-3">
                  <span className="grid size-9 place-items-center rounded-lg bg-surface text-accent">
                    <Camera size={16} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-text">
                      {c.name}
                    </span>
                    <span className="font-mono text-[11px] text-muted">
                      {c.id}
                    </span>
                  </div>
                </div>
                <Plug size={14} className="text-accent" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between border-t border-border pt-4 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            <span>Ingest</span>
            <span>3 streams · 29.97 fps</span>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function DetectVisual() {
  return (
    <VisualShell>
      <div className="absolute inset-0 bg-[#0b0b10] dark:bg-[#13131a]">
        <DetectGrid />
        <div className="absolute inset-0 p-6">
          <div className="flex h-full flex-col justify-between">
            <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.18em] text-white/50">
              <span className="inline-flex items-center gap-2">
                <Cpu size={12} />
                inference · toru-v4
              </span>
              <span>84ms</span>
            </div>

            <div className="relative flex-1">
              <DetectBox x="12%" y="28%" w="14%" h="44%" color="#00e5b8" label="person · 0.98" />
              <DetectBox x="34%" y="18%" w="14%" h="52%" color="#00e5b8" label="person · 0.96" />
              <DetectBox x="58%" y="34%" w="14%" h="40%" color="#00e5b8" label="person · 0.94" />
              <DetectBox x="78%" y="22%" w="12%" h="48%" color="#6b57f5" label="person · 0.92" />
            </div>

            <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 font-mono text-[10px] uppercase tracking-[0.18em] text-white/60">
              <span>Objects · 4</span>
              <span className="text-center">FPS · 29.9</span>
              <span className="text-right">mAP · 96.4</span>
            </div>
          </div>
        </div>
      </div>
    </VisualShell>
  );
}

function DetectBox({
  x,
  y,
  w,
  h,
  color,
  label,
}: {
  x: string;
  y: string;
  w: string;
  h: string;
  color: string;
  label: string;
}) {
  return (
    <div
      className="absolute"
      style={{ left: x, top: y, width: w, height: h, color }}
    >
      <span
        className="absolute left-0 right-0 top-0 h-px"
        style={{ background: color, opacity: 0.8 }}
      />
      <span
        className="absolute left-0 right-0 bottom-0 h-px"
        style={{ background: color, opacity: 0.8 }}
      />
      <span
        className="absolute top-0 bottom-0 left-0 w-px"
        style={{ background: color, opacity: 0.8 }}
      />
      <span
        className="absolute top-0 bottom-0 right-0 w-px"
        style={{ background: color, opacity: 0.8 }}
      />
      <span className="absolute left-0 top-0 size-2 border-t-2 border-l-2" style={{ borderColor: color }} />
      <span className="absolute right-0 top-0 size-2 border-t-2 border-r-2" style={{ borderColor: color }} />
      <span className="absolute left-0 bottom-0 size-2 border-b-2 border-l-2" style={{ borderColor: color }} />
      <span className="absolute right-0 bottom-0 size-2 border-b-2 border-r-2" style={{ borderColor: color }} />
      <span
        className="absolute -bottom-5 left-0 whitespace-nowrap font-mono text-[9px] uppercase tracking-wider"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

function DetectGrid() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-[0.16]"
      preserveAspectRatio="none"
      viewBox="0 0 400 300"
    >
      <defs>
        <pattern id="detect-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ffffff" strokeWidth="0.4" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#detect-grid)" />
    </svg>
  );
}

function DeliverVisual() {
  return (
    <VisualShell>
      <div className="absolute inset-0 flex flex-col">
        <div className="flex items-center justify-between border-b border-border bg-canvas px-5 py-3">
          <div className="flex items-center gap-2">
            <Monitor size={14} className="text-accent" />
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              toru · flagship
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            <span className="size-1.5 animate-pulse rounded-full bg-accent" />
            live
          </span>
        </div>
        <div className="grid flex-1 grid-cols-2 gap-3 p-5">
          <MiniStat title="Occupancy" value="47/60" trend="+6" accent="accent" />
          <MiniStat title="Avg dwell" value="4m 32s" trend="-12s" accent="text" />
          <MiniStat title="Queue" value="6" trend="alert" accent="violet" />
          <MiniStat title="Today" value="1,284" trend="+18%" accent="teal" />
        </div>
      </div>
    </VisualShell>
  );
}

function MiniStat({
  title,
  value,
  trend,
  accent,
}: {
  title: string;
  value: string;
  trend: string;
  accent: "accent" | "teal" | "violet" | "text";
}) {
  const trendColor = {
    accent: "text-accent",
    teal: "text-accent",
    violet: "text-violet",
    text: "text-text-2",
  }[accent];
  return (
    <div className="flex flex-col justify-between rounded-xl border border-border bg-surface p-4">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-muted">
        <span>{title}</span>
        <span className={`font-mono ${trendColor}`}>{trend}</span>
      </div>
      <span className="mt-3 font-mono text-2xl tabular-nums tracking-tight text-text">
        {value}
      </span>
    </div>
  );
}
