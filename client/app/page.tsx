import { Hero } from "@/components/marketing/hero";
import { WhatToruSees } from "@/components/marketing/what-toru-sees";
import { BusinessOutcomes } from "@/components/sections/business-outcomes";
import { Industries } from "@/components/marketing/industries";
import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { FinalCTA } from "@/components/marketing/final-cta";

export default function Page() {
  return (
    <>
      <Hero />
      <WhatToruSees />
      <BusinessOutcomes />
      {/* <Industries /> */}
      <DashboardPreview />
      <FinalCTA />
    </>
  );
}
