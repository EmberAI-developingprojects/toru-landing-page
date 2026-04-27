import {
  Section,
  SectionEyebrow,
  SectionLead,
  SectionTitle,
} from "@/components/ui/section";
import { ScaleInImage } from "@/components/motion/scale-in-image";
import { RevealText } from "@/components/motion/reveal-text";
import { RevealOnScroll } from "@/components/motion/reveal-on-scroll";

export function DashboardPreview() {
  return (
    <Section className="border-y border-border bg-canvas">
      <div className="flex flex-col items-center gap-6 text-center">
        <SectionEyebrow>The platform</SectionEyebrow>
        <SectionTitle className="mx-auto text-center">
          <RevealText as="span" split="word">
            Everything your operators need. Nothing they don&apos;t.
          </RevealText>
        </SectionTitle>
        <SectionLead className="mx-auto text-center">
          Real-time tiles, historical trends, custom alerts, multi-location
          roll-ups. Built for operators, not data scientists.
        </SectionLead>
      </div>

      <div className="relative mt-16">
        <ScaleInImage className="mx-auto w-full max-w-5xl border border-border bg-canvas shadow-(--shadow-float)">
          <DashboardChrome />
          <DashboardBody />
        </ScaleInImage>

        <FloatingChip
          className="-top-4 left-4 md:-left-8 md:top-12"
          tone="accent"
          delay={0.2}
        >
          <span className="size-1.5 rounded-full bg-accent" />
          Live: 247 visitors
        </FloatingChip>
        <FloatingChip
          className="-top-4 right-4 md:-right-10 md:top-24"
          tone="amber"
          delay={0.35}
        >
          <span className="size-1.5 rounded-full bg-[#f59e0b]" />
          Queue: 4 min avg
        </FloatingChip>
        <FloatingChip
          className="-bottom-4 left-4 md:-left-12 md:bottom-20"
          tone="violet"
          delay={0.5}
        >
          <span className="size-1.5 rounded-full bg-violet" />
          Occupancy: 78%
        </FloatingChip>
        <FloatingChip
          className="-bottom-4 right-4 md:-right-8 md:bottom-12"
          tone="red"
          delay={0.65}
        >
          <span className="size-1.5 rounded-full bg-[#ef4444]" />
          Alert: Zone B exceeded
        </FloatingChip>
      </div>
    </Section>
  );
}

function FloatingChip({
  children,
  className,
  tone,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  tone: "accent" | "amber" | "violet" | "red";
  delay: number;
}) {
  const toneMap = {
    accent: "border-accent/50 text-accent",
    amber: "border-[#f59e0b]/50 text-[#b45309]",
    violet: "border-violet/50 text-violet",
    red: "border-[#ef4444]/60 text-[#b91c1c]",
  } as const;
  return (
    <RevealOnScroll
      delay={delay}
      className={`pointer-events-none absolute z-10 hidden md:block ${className ?? ""}`}
    >
      <span
        className={`inline-flex items-center gap-2 rounded-full border bg-canvas px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] shadow-[0_8px_24px_-12px_rgba(11,11,16,0.25)] ${toneMap[tone]}`}
      >
        {children}
      </span>
    </RevealOnScroll>
  );
}

function DashboardChrome() {
  return (
    <div className="flex items-center justify-between border-b border-border bg-surface px-5 py-3">
      <div className="flex items-center gap-2">
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
        <span className="size-2.5 rounded-full bg-border-strong" />
      </div>
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
        toru · downtown flagship
      </span>
      <span className="flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
        <span className="size-1.5 animate-pulse rounded-full bg-accent" />
        live
      </span>
    </div>
  );
}

function DashboardBody() {
  return (
    <div className="grid grid-cols-12 gap-3 bg-canvas p-4 md:gap-4 md:p-6">
      <Card
        span="col-span-12 md:col-span-4"
        title="Occupancy"
        value="47/60"
        sub="78% capacity"
        trend="+6 vs avg"
        tone="accent"
      />
      <Card
        span="col-span-6 md:col-span-4"
        title="Avg dwell"
        value="4m 32s"
        sub="last 60 min"
        trend="-12s"
        tone="text"
      />
      <Card
        span="col-span-6 md:col-span-4"
        title="Queue"
        value="6"
        sub="checkout — lane 2"
        trend="alert · >5"
        tone="violet"
      />

      <div className="col-span-12 rounded-xl border border-border bg-surface p-5 md:col-span-8">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-medium tracking-tight text-text">
              Foot traffic — today
            </h4>
            <p className="text-xs text-muted">people / 15m bucket</p>
          </div>
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            08:00 — 20:00
          </span>
        </div>
        <Sparkline />
      </div>

      <div className="col-span-12 rounded-xl border border-border bg-surface p-5 md:col-span-4">
        <h4 className="text-sm font-medium tracking-tight text-text">
          Top zones
        </h4>
        <ul className="mt-3 space-y-2.5 text-sm">
          {[
            { z: "Entrance", v: 412 },
            { z: "Aisle 03", v: 287 },
            { z: "Checkout", v: 196 },
            { z: "Café", v: 134 },
          ].map((z) => (
            <li key={z.z} className="flex items-center justify-between">
              <span className="text-text-2">{z.z}</span>
              <span className="font-mono tabular-nums text-muted">{z.v}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Card({
  span,
  title,
  value,
  sub,
  trend,
  tone,
}: {
  span: string;
  title: string;
  value: string;
  sub: string;
  trend: string;
  tone: "accent" | "violet" | "text" | "teal";
}) {
  const toneMap = {
    accent: "text-accent",
    violet: "text-violet",
    teal: "text-accent",
    text: "text-text-2",
  } as const;
  return (
    <div className={`${span} rounded-xl border border-border bg-surface p-5`}>
      <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-muted">
        <span>{title}</span>
        <span className={`font-mono ${toneMap[tone]}`}>{trend}</span>
      </div>
      <div className="mt-3 flex items-baseline gap-2">
        <span className="font-mono text-3xl tabular-nums tracking-tight text-text">
          {value}
        </span>
        <span className="text-xs text-muted">{sub}</span>
      </div>
    </div>
  );
}

function Sparkline() {
  const points = [
    12, 18, 26, 22, 34, 41, 38, 49, 55, 47, 61, 58, 67, 60, 72, 64, 78, 70, 82,
    74,
  ];
  const max = Math.max(...points);
  const w = 100 / (points.length - 1);
  const path = points
    .map((p, i) => {
      const x = i * w;
      const y = 100 - (p / max) * 100;
      return `${i === 0 ? "M" : "L"} ${x} ${y}`;
    })
    .join(" ");
  const fill = `${path} L 100 100 L 0 100 Z`;

  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="mt-4 h-32 w-full text-accent"
    >
      <defs>
        <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.28" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fill} fill="url(#spark)" />
      <path d={path} fill="none" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  );
}
