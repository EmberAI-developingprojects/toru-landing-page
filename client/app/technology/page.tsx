import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PipelineDiagram } from "@/components/sections/pipeline-diagram";
import { AiModels } from "@/components/sections/ai-models";
import { DarkCTA } from "@/components/sections/dark-cta";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "How Toru turns raw video into real-time signal — connect, detect, extract, deliver. ",
};

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="Connect. Detect. Extract. Deliver."
        subtitle="Toru's computer vision pipeline is built for real-world conditions — any camera, any lighting, any resolution. Here's exactly how it works."
        background="grid"
      />
      <PipelineDiagram />
      <AiModels />
      <DarkCTA
        eyebrow="Ready to dig in"
        title="See the pipeline running live."
        subtitle="We'll walk you through every step of the architecture."
        ctaLabel="Talk to the team"
        ctaHref="/contact"
      />
    </>
  );
}
