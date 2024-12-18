import React from "react";
import { ServiceComponent } from "@/app/services/ServiceComponent";
import { services } from "@/data-list";
import { CircleArrowRight } from "lucide-react";
import { ContentWrapper } from "@/app/components";

export default function Services() {
  return (
    <ContentWrapper>
      <div
        key="services"
        className="w-full flex flex-col justify-center items-center gap-20 mx-0 my-8"
      >
        <div className="w-full px-0 py-5 flex flex-col items-center justify-center gap-4">
          <p className="font-sans text-2xl text-primary">
            Servitec Estudio Contable
          </p>
          <p className="font-bold text-4xl">Brindamos lo necesario para una</p>
          <p className="font-bold text-4xl text-secondary">
            buena contabilidad en tu negocio
          </p>
        </div>
        {services.map((service, index) => (
          <ServiceComponent
            key={index}
            title={service.title}
            description={service.description}
            image={service.image}
            items={service.items.map((item, index) => (
              <li key={index} className="flex gap-3 items-center">
                <CircleArrowRight
                  className="text-primary object-contain"
                  size={20}
                />
                {item}
              </li>
            ))}
            direction={service.direction}
          />
        ))}
      </div>
    </ContentWrapper>
  );
}
