import React from "react";
import { ServiceSectionComponent } from "@/app/ServiceSectionComponent";
import { MainSection } from "@/app/MainSection";

export default function Home() {
  return (
    <>
      <MainSection />
      <ServiceSectionComponent />
    </>
  );
}
