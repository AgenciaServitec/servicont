"use client";
import React, { useState } from "react";
import { ServiceSectionComponent } from "@/app/ServiceSectionComponent";

export default function Home() {
  const [serviceSelected, setServiceSelected] = useState("outsorcing");

  const onSetServiceSelected = (service: string) => {
    setServiceSelected(service);
  };

  return (
    <>
      <ServiceSectionComponent
        serviceSelected={serviceSelected}
        onSetServiceSelected={onSetServiceSelected}
      />
    </>
  );
}
