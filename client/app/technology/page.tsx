import type { Metadata } from "next";
import { StubPage } from "@/components/marketing/stub-page";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "How Toru turns raw video into real-time signal — connect, detect, extract, deliver.",
};

export default function Page() {
  return (
    <StubPage
      eyebrow="Technology"
      title="Connect. Detect. Extract. Deliver."
      description="A walkthrough of the Toru pipeline — from any IP camera to live metrics in your dashboard. Custom-trained CV models, sub-100ms inference, no edge hardware required. Full page coming soon."
    />
  );
}
