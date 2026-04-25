"use client";

import { motion } from "framer-motion";

type Subject = {
  id: string;
  x: number;
  y: number;
  w: number;
  h: number;
  color: "pulse" | "violet";
  label?: string;
  delay: number;
};

const COLOR_HEX = {
  pulse: "#00e5b8",
  violet: "#6b57f5",
} as const;

const subjects: Subject[] = [
  { id: "a", x: 7, y: 28, w: 13, h: 32, color: "pulse", delay: 0.25 },
  { id: "b", x: 25, y: 16, w: 14, h: 30, color: "pulse", label: "Dwell: 4m 32s", delay: 0.55 },
  { id: "c", x: 44, y: 38, w: 14, h: 32, color: "pulse", label: "Occupancy: 47/60", delay: 0.85 },
  { id: "d", x: 63, y: 20, w: 13, h: 30, color: "pulse", delay: 1.15 },
  { id: "e", x: 79, y: 36, w: 12, h: 30, color: "violet", label: "Queue: 6", delay: 1.45 },
];

export function HeroIllustration() {
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-[#1a1a22] bg-[#0b0b10] shadow-(--shadow-float) dark:border-[#23232e] dark:bg-[#13131a]">
      <BackdropGrid />
      <SceneSilhouettes />
      <FlowLines />

      {subjects.map((s) => (
        <Detection key={s.id} subject={s} />
      ))}

      <CornerChrome />
    </div>
  );
}

function Detection({ subject }: { subject: Subject }) {
  const color = COLOR_HEX[subject.color];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: subject.delay, ease: [0.22, 1, 0.36, 1] }}
      className="absolute"
      style={{
        left: `${subject.x}%`,
        top: `${subject.y}%`,
        width: `${subject.w}%`,
        height: `${subject.h}%`,
        color,
      }}
    >
      <Corner pos="tl" />
      <Corner pos="tr" />
      <Corner pos="bl" />
      <Corner pos="br" />

      <motion.span
        aria-hidden
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: color, boxShadow: `0 0 10px ${color}` }}
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{
          duration: 3.6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: subject.delay,
        }}
      />

      {subject.label ? (
        <motion.span
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: subject.delay + 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md px-2.5 py-1 font-mono text-[11px] tracking-tight"
          style={{
            background: "rgba(11, 11, 16, 0.9)",
            border: `1px solid ${color}`,
            color: "#f6f6f8",
            boxShadow: `0 8px 24px -8px ${color}`,
          }}
        >
          {subject.label}
        </motion.span>
      ) : null}
    </motion.div>
  );
}

function Corner({ pos }: { pos: "tl" | "tr" | "bl" | "br" }) {
  const positions = {
    tl: "top-0 left-0 border-t-2 border-l-2",
    tr: "top-0 right-0 border-t-2 border-r-2",
    bl: "bottom-0 left-0 border-b-2 border-l-2",
    br: "bottom-0 right-0 border-b-2 border-r-2",
  } as const;
  return (
    <span
      aria-hidden
      className={`absolute size-3 ${positions[pos]}`}
      style={{ borderColor: "currentColor" }}
    />
  );
}

function BackdropGrid() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-[0.18]"
      preserveAspectRatio="none"
      viewBox="0 0 800 600"
    >
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#3a3a48" strokeWidth="0.5" />
        </pattern>
        <radialGradient id="fade" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="rgba(0,0,0,0)" />
          <stop offset="100%" stopColor="rgba(11,11,16,1)" />
        </radialGradient>
      </defs>
      <rect width="800" height="600" fill="url(#grid)" />
      <rect width="800" height="600" fill="url(#fade)" />
    </svg>
  );
}

function SceneSilhouettes() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full"
      viewBox="0 0 800 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <g stroke="#3f3f4e" strokeWidth="1.2" fill="none" opacity="0.6">
        <path d="M 0 470 L 800 470" />
        <path d="M 60 470 L 60 380 L 220 380 L 220 470" />
        <path d="M 320 470 L 320 360 L 520 360 L 520 470" />
        <path d="M 580 470 L 580 390 L 760 390 L 760 470" />
        <path d="M 360 360 L 360 320 L 480 320 L 480 360" />
        <circle cx="640" cy="430" r="10" />
        <circle cx="700" cy="430" r="10" />
      </g>

      <g fill="#2c2c38">
        <Person cx={108} baseY={460} />
        <Person cx={232} baseY={440} />
        <Person cx={388} baseY={448} />
        <Person cx={508} baseY={460} />
        <Person cx={636} baseY={446} />
        <Person cx={714} baseY={446} />
      </g>
    </svg>
  );
}

function Person({ cx, baseY }: { cx: number; baseY: number }) {
  return (
    <g transform={`translate(${cx} ${baseY})`}>
      <circle cx="0" cy="-92" r="11" />
      <rect x="-12" y="-78" width="24" height="48" rx="6" />
      <rect x="-10" y="-30" width="9" height="30" rx="3" />
      <rect x="1" y="-30" width="9" height="30" rx="3" />
    </g>
  );
}

function FlowLines() {
  return (
    <svg
      aria-hidden
      className="absolute inset-0 h-full w-full opacity-60"
      viewBox="0 0 800 600"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="flow" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(0,229,184,0)" />
          <stop offset="50%" stopColor="rgba(0,229,184,0.55)" />
          <stop offset="100%" stopColor="rgba(107,87,245,0)" />
        </linearGradient>
      </defs>
      <path
        d="M 40 500 C 220 460, 360 540, 540 470 S 760 440, 800 460"
        fill="none"
        stroke="url(#flow)"
        strokeWidth="1.5"
        strokeDasharray="3 6"
      />
      <path
        d="M 80 540 C 260 510, 380 560, 560 510 S 760 490, 800 500"
        fill="none"
        stroke="url(#flow)"
        strokeWidth="1.2"
        strokeDasharray="3 6"
      />
    </svg>
  );
}

function CornerChrome() {
  return (
    <>
      <span className="absolute left-3 top-3 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
        <span className="size-1.5 animate-pulse rounded-full bg-pulse" />
        Live · feed-04
      </span>
      <span className="absolute right-3 top-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
        29.97 fps
      </span>
      <span className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
        Detections: 5
      </span>
      <span className="absolute bottom-3 right-3 font-mono text-[10px] uppercase tracking-[0.2em] text-white/60">
        ▶ rec
      </span>
    </>
  );
}
