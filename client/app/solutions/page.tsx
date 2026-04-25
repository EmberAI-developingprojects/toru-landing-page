import type { Metadata } from "next";
import { StubPage } from "@/components/marketing/stub-page";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Toru applied across retail, offices, cafés, buildings, manufacturing, and events.",
};

export default function Page() {
  return (
    <StubPage
      eyebrow="Solutions"
      title="One platform. Built for every space."
      description="Retail · Offices · Cafés · Buildings · Manufacturing · Events. Each industry deserves the metrics that move its needle — full breakdowns coming soon."
    />
  );
}
