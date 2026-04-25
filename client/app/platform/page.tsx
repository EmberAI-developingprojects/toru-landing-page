import type { Metadata } from "next";
import { StubPage } from "@/components/marketing/stub-page";

export const metadata: Metadata = {
  title: "Platform",
  description:
    "What you actually get with Toru — live metrics, alerts, multi-location, API.",
};

export default function Page() {
  return (
    <StubPage
      eyebrow="Platform"
      title="Everything your operators need. Nothing they don't."
      description="Live metrics, historical reports, custom alerts, multi-location management, API access, and exports. The operator dashboard tour lands here soon."
    />
  );
}
