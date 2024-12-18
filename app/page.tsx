import React from "react";
import { ServiceSectionComponent } from "@/app/ServiceSectionComponent";
import { MainSection } from "@/app/MainSection";
import { PlansSectionComponent } from "@/app/PlansSectionComponent";

export default function Home() {
  return (
    <>
      <MainSection />
      <ServiceSectionComponent />
      <PlansSectionComponent />
    </>
  );
}
