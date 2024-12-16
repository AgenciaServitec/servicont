import React from "react";
import { ServiceComponent } from "@/app/services/ServiceComponent";
import { services } from "@/app/data-list";
import { CircleArrowRight } from "lucide-react";

export default function Services(): React.ReactNode {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-20 mx-0 my-8">
      <div className="w-full px-0 py-5 flex flex-col items-center justify-center gap-4">
        <p className="font-sans text-2xl text-primary">
          Servitec Estudio Contable
        </p>
        <p className="font-bold text-4xl">Brindamos lo necesario para una</p>
        <p className="font-bold text-4xl text-secondary">
          buena contabilidad en tu negocio
        </p>
      </div>
      {services.map((service) => (
        <ServiceComponent
          title={service.title}
          description={service.description}
          image={service.image}
          items={service.items.map((item, index) => (
            <li key={index} className="flex gap-5 items-center">
              <CircleArrowRight
                key={index}
                className="text-primary"
                size={20}
              />
              {item}
            </li>
          ))}
          direction={service.direction}
        />
      ))}
    </div>
  );
}
