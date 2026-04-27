import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { SolutionCategories } from "@/components/sections/solution-categories";
import { IndustryDeepDives } from "@/components/sections/industry-deep-dives";
import { DarkCTA } from "@/components/sections/dark-cta";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Toru applied across retail, warehouse, healthcare, government, education, and OOH advertising — same platform, tailored intelligence.",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="One platform. Built for every space."
        subtitle="Whether you run a single café or a network of warehouses, Toru's computer vision turns your video into the metrics that matter — same AI, every industry."
        ctaLabel="Find your solution"
        ctaHref="#categories"
        background="dots"
      />
      <SolutionCategories />
      <IndustryDeepDives />
      <DarkCTA
        eyebrow="No two operations look alike"
        title="Not sure which solution fits your space?"
        subtitle="Bring one camera feed. We'll demo the exact metrics relevant to your operation."
        ctaLabel="Talk to the team"
        ctaHref="/contact"
      />
    </>
  );
}
