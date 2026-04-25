import { Section } from "@/components/ui/section";
import {
  StaggerGroup,
  StaggerItem,
} from "@/components/motion/reveal-on-scroll";

const placeholders = ["Aurora", "Northbound", "Veridian", "Fieldnote", "Halcyon", "Lumen"];

export function SocialProof() {
  return (
    <Section className="py-16 md:py-20">
      <p className="text-center font-mono text-xs uppercase tracking-[0.22em] text-muted">
        Deployed across pilot sites in 3 industries
      </p>
      <StaggerGroup
        className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 md:grid-cols-6"
        stagger={0.05}
      >
        {placeholders.map((name) => (
          <StaggerItem
            key={name}
            className="flex h-10 items-center justify-center font-mono text-sm uppercase tracking-[0.2em] text-muted"
          >
            {name}
          </StaggerItem>
        ))}
      </StaggerGroup>
    </Section>
  );
}
