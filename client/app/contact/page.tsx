import type { Metadata } from "next";
import { StubPage } from "@/components/marketing/stub-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Talk to the Toru team about real-time video intelligence.",
};

export default function Page() {
  return (
    <StubPage
      eyebrow="Contact"
      title="Bring one feed. We'll show you the rest."
      description="Reach out and we'll get back to you. In the meantime, email hello@toru.ai."
    />
  );
}
