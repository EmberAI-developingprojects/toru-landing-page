import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { PipelineDiagram } from "@/components/sections/pipeline-diagram";
import { PerfStats } from "@/components/sections/perf-stats";
import { PrivacyDesign } from "@/components/sections/privacy-design";
import { AiModels } from "@/components/sections/ai-models";
import { IntegrationApi } from "@/components/sections/integration-api";
import { DarkCTA } from "@/components/sections/dark-cta";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "How Toru turns raw video into real-time signal — connect, detect, extract, deliver. Custom-trained CV models, sub-100ms inference, on-premise processing.",
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
      <PerfStats />
      <PrivacyDesign />
      <AiModels />
      <IntegrationApi />
      <DarkCTA
        eyebrow="Ready to dig in"
        title="See the pipeline running live."
        subtitle="We'll connect to a real feed and walk you through every step in real time."
        ctaLabel="Book a technical demo"
        ctaHref="/contact"
      />
    </>
  );
}
