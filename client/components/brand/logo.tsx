import { Mark } from "./mark";
import { Wordmark } from "./wordmark";
import { cn } from "@/lib/cn";

type LogoVariant = "horizontal" | "stacked" | "symbol";
type LogoSize = "sm" | "md" | "lg" | "xl";

type LogoProps = {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
  title?: string;
};

const SIZE: Record<LogoSize, { font: string; mark: string; density: "xs" | "sm" | "md" | "lg"; gap: string }> = {
  sm: { font: "text-lg", mark: "size-6", density: "sm", gap: "gap-1.5" },
  md: { font: "text-xl", mark: "size-7", density: "md", gap: "gap-2" },
  lg: { font: "text-3xl", mark: "size-10", density: "lg", gap: "gap-2.5" },
  xl: { font: "text-6xl", mark: "size-16", density: "lg", gap: "gap-3" },
};

export function Logo({
  variant = "horizontal",
  size = "md",
  className,
  title = "Toru",
}: LogoProps) {
  const s = SIZE[size];

  if (variant === "symbol") {
    return (
      <span className={cn("inline-block", s.mark, className)}>
        <Mark density={s.density} title={title} />
      </span>
    );
  }

  if (variant === "stacked") {
    return (
      <span
        className={cn(
          "inline-flex flex-col items-center gap-1.5",
          className,
        )}
      >
        <span className={cn("inline-block", s.mark)}>
          <Mark density={s.density} title={title} />
        </span>
        <Wordmark className={s.font} />
      </span>
    );
  }

  return (
    <span className={cn("inline-flex items-center", s.gap, className)}>
      <span className={cn("inline-block", s.mark)}>
        <Mark density={s.density} title={title} />
      </span>
      <Wordmark className={s.font} />
    </span>
  );
}
