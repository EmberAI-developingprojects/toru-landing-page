import { cn } from "@/lib/cn";

type Density = "lg" | "md" | "sm" | "xs";

type Preset = {
  strokeWidth: number;
  bracketEnd: number;
  bracketInset: number;
  dot: number;
};

const PRESETS: Record<Density, Preset> = {
  lg: { strokeWidth: 3, bracketEnd: 16, bracketInset: 1.5, dot: 4 },
  md: { strokeWidth: 3.5, bracketEnd: 16, bracketInset: 1.5, dot: 5 },
  sm: { strokeWidth: 4.5, bracketEnd: 18, bracketInset: 1.5, dot: 6 },
  xs: { strokeWidth: 6, bracketEnd: 20, bracketInset: 1.5, dot: 8 },
};

type MarkProps = {
  density?: Density;
  className?: string;
  title?: string;
};

export function Mark({ density = "lg", className, title }: MarkProps) {
  const p = PRESETS[density];
  const end = p.bracketEnd;
  const inset = p.bracketInset;
  const far = 64 - inset;
  const farEnd = 64 - end;

  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      className={cn("block h-full w-full", className)}
    >
      <path
        d={`M${inset} ${end} L${inset} ${inset} L${end} ${inset}`}
        stroke="currentColor"
        strokeWidth={p.strokeWidth}
        strokeLinecap="square"
      />
      <path
        d={`M${farEnd} ${inset} L${far} ${inset} L${far} ${end}`}
        stroke="currentColor"
        strokeWidth={p.strokeWidth}
        strokeLinecap="square"
      />
      <path
        d={`M${inset} ${farEnd} L${inset} ${far} L${end} ${far}`}
        stroke="currentColor"
        strokeWidth={p.strokeWidth}
        strokeLinecap="square"
      />
      <path
        d={`M${farEnd} ${far} L${far} ${far} L${far} ${farEnd}`}
        stroke="currentColor"
        strokeWidth={p.strokeWidth}
        strokeLinecap="square"
      />
      <circle cx={32} cy={32} r={p.dot} fill="currentColor" />
    </svg>
  );
}
