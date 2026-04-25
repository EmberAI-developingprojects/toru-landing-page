import { cn } from "@/lib/cn";

type WordmarkProps = {
  className?: string;
};

export function Wordmark({ className }: WordmarkProps) {
  return (
    <span
      className={cn(
        "font-sans font-semibold leading-none tracking-[-0.04em]",
        className,
      )}
    >
      toru
    </span>
  );
}
