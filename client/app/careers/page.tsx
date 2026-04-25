import type { Metadata } from "next";
import { StubPage } from "@/components/marketing/stub-page";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Cameras everywhere. Intelligence nowhere. We're fixing that — come build.",
};

export default function Page() {
  return (
    <StubPage
      eyebrow="Careers"
      title="Cameras everywhere. Intelligence nowhere. Let's fix that."
      description="We're a small, technical team turning passive video into operational signal. Mission, values, and open roles publish here soon — in the meantime, reach out."
    />
  );
}
