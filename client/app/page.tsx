import { Hero } from "@/components/marketing/hero";
import { InputSourcesStrip } from "@/components/sections/input-sources-strip";
import { WhatToruSees } from "@/components/marketing/what-toru-sees";
import { BusinessOutcomes } from "@/components/sections/business-outcomes";
import { Industries } from "@/components/marketing/industries";
import { DashboardPreview } from "@/components/marketing/dashboard-preview";
import { FinalCTA } from "@/components/marketing/final-cta";

export default function Page() {
  return (
    <>
      <Hero />
      <InputSourcesStrip />
      <WhatToruSees />
      <BusinessOutcomes />
      {/* <Industries /> */}
      <DashboardPreview />
      <FinalCTA />
    </>
  );
}
