import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/reveal-on-scroll";

type AdvantageStripProps = {
  items?: string[];
};

const defaultItems = [
  "Any camera, any resolution",
  "Video never leaves your site",
  "Custom-trained AI models",
  "API-first, white-label ready",
];

export function AdvantageStrip({ items = defaultItems }: AdvantageStripProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#00382a] to-[#001a13] px-6 py-16 text-white md:px-10 md:py-20">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 80% at 50% 0%, rgba(0,229,184,0.15) 0%, rgba(0,26,19,0) 60%)",
        }}
      />
      <StaggerGroup
        className="relative mx-auto grid w-full max-w-6xl gap-3 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.08}
      >
        {items.map((label) => (
          <StaggerItem
            key={label}
            className="flex items-center gap-3 rounded-full border border-pulse/30 bg-white/5 px-5 py-3 backdrop-blur-sm"
          >
            <span className="size-1.5 shrink-0 rounded-full bg-pulse shadow-[0_0_10px_var(--color-pulse)]" />
            <span className="font-mono text-[12px] uppercase tracking-[0.18em] text-white/85">
              {label}
            </span>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </section>
  );
}
