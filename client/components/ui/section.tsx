import { cn } from "@/lib/cn";

type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  bleed?: boolean;
};

export function Section({
  className,
  children,
  bleed = false,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn("relative w-full py-24 md:py-32", className)}
      {...rest}
    >
      <div
        className={cn(
          "mx-auto w-full",
          bleed ? "max-w-none" : "max-w-6xl px-6 md:px-10",
        )}
      >
        {children}
      </div>
    </section>
  );
}

export function SectionEyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-accent",
        className,
      )}
    >
      <span className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_var(--color-accent)]" />
      {children}
    </span>
  );
}

export function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "mt-4 max-w-3xl text-balance text-3xl font-semibold leading-tight tracking-tight md:text-5xl",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function SectionLead({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted md:text-lg",
        className,
      )}
    >
      {children}
    </p>
  );
}
