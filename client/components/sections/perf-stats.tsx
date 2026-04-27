import { Section } from "@/components/ui/section";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/reveal-on-scroll";

const stats = [
  { value: "<100ms", label: "Inference latency per frame" },
  { value: ">95%", label: "Detection accuracy across environments" },
  { value: "360p+", label: "Minimum camera resolution required" },
  { value: "1000+", label: "Compatible camera models tested" },
];

export function PerfStats() {
  return (
    <Section className="bg-canvas">
      <StaggerGroup
        className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        stagger={0.08}
      >
        {stats.map((s) => (
          <StaggerItem
            key={s.value}
            className="flex flex-col gap-3 rounded-2xl bg-gradient-to-br from-[#00382a] to-[#001a13] p-7 text-white shadow-[0_10px_30px_-12px_rgba(0,144,110,0.45)]"
          >
            <span className="font-mono text-4xl font-semibold tracking-tight text-pulse md:text-5xl">
              {s.value}
            </span>
            <span className="text-[14px] leading-[1.6] text-white/75">
              {s.label}
            </span>
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
