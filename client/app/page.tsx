import { Hero } from "@/components/marketing/hero";
import { WhatToruSees } from "@/components/marketing/what-toru-sees";
import { HowItWorks } from "@/components/marketing/how-it-works";
import { Industries } from "@/components/marketing/industries";
import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { SocialProof } from "@/components/marketing/social-proof";
import { FinalCTA } from "@/components/marketing/final-cta";

export default function Page() {
  return (
    <>
      <Hero />
      <WhatToruSees />
      <HowItWorks />
      <Industries />
      <DashboardPreview />
      <SocialProof />
      <FinalCTA />
    </>
  );
}
