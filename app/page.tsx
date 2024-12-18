"use client";
import React, { useState } from "react";
import { ServiceSectionComponent } from "@/app/ServiceSectionComponent";
import { MainSection } from "@/app/MainSection";

export default function Home() {
  const [serviceSelected, setServiceSelected] = useState("outsorcing");

  const onSetServiceSelected = (service: string) => {
    setServiceSelected(service);
  };

  return (
    <>
      <MainSection />
      <ServiceSectionComponent
        serviceSelected={serviceSelected}
        onSetServiceSelected={onSetServiceSelected}
      />
    </>
  );
}
