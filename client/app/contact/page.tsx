import type { Metadata } from "next";
import { StubPage } from "@/components/marketing/stub-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Book a Toru demo or talk to the team.",
};

export default function Page() {
  return (
    <StubPage
      eyebrow="Contact"
      title="Bring one feed. We'll show you the rest."
      description="A working demo on your camera in days, not quarters. Booking form lands here soon — in the meantime, email hello@toru.ai."
    />
  );
}
