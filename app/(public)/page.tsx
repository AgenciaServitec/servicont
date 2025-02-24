import React from "react";
import { ServiceSectionComponent } from "@/components/pages/ServiceSectionComponent";
import { MainSection } from "@/components/pages/MainSection";
import { PlansSectionComponent } from "@/components/pages/PlansSectionComponent";

export default function Home() {
  return (
    <>
      <MainSection />
      <ServiceSectionComponent />
      <PlansSectionComponent />
    </>
  );
}
