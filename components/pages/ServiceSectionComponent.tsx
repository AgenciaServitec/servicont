"use client";

import React, { useState } from "react";
import { CircleArrowRight } from "lucide-react";
import { ServiceComponent } from "@/components/pages/ServiceComponent";
import { services } from "@/data-list";
import { ButtonsServicesSectionComponent } from "@/components/pages/ButtonsServicesSectionComponent";
import { ContentWrapper } from "@/components/ui-custom/ContentWrapper";

export const ServiceSectionComponent = (): React.ReactNode => {
  const [serviceSelected, setServiceSelected] = useState("accounting");

  const onSetServiceSelected = (service: string) => {
    setServiceSelected(service);
  };
  return (
    <ContentWrapper>
      <div className="w-full mx-0 my-20 flex flex-col items-center gap-12 text-center">
        <div className="flex flex-col items-center ">
          <p className="font-sans text-lg sm:text-2xl md:text-3xl text-primary">
            Servitec Estudio Contable
          </p>
          <p className="font-bold md:text-4xl sm:text-3xl text-2xl">
            Brindamos lo necesario para una
          </p>
          <p className="font-bold md:text-4xl sm:text-3xl text-2xl text-secondary">
            buena contabilidad en tu negocio
          </p>
        </div>
        <ButtonsServicesSectionComponent
          serviceSelected={serviceSelected}
          onSetServiceSelected={onSetServiceSelected}
        />
        <div className="w-full flex flex-col items-center">
          {services.map(
            (service, index) =>
              serviceSelected === service.code && (
                <ServiceComponent
                  key={index}
                  title={service.title}
                  image={service.image}
                  description={service.description}
                  items={service.items.map((item, index) => (
                    <li key={index} className="flex gap-5 items-center">
                      <CircleArrowRight className="text-primary" size={20} />
                      {item}
                    </li>
                  ))}
                  direction="right"
                />
              ),
          )}
        </div>
      </div>
    </ContentWrapper>
  );
};
