import React from "react";
import { Button } from "@/app/components";
import {
  BookUser,
  BriefcaseBusiness,
  CircleArrowRight,
  HandCoins,
} from "lucide-react";
import { services } from "@/app/data-list";
import { ServiceComponent } from "@/app/services/ServiceComponent";

interface Props {
  serviceSelected: string;
  onSetServiceSelected: (service: string) => void;
}

export const ServiceSectionComponent = ({
  serviceSelected,
  onSetServiceSelected,
}: Props): React.ReactNode => {
  return (
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
      <div className="flex flex-wrap gap-6 justify-center px-4">
        <Button
          className={`flex flex-col gap-0.5 items-center  w-32 px-0 py-2 rounded-xl ${serviceSelected === "outsorcing" ? "bg-primary" : "bg-white"} hover:bg-primary hover:text-white hover:delay-75 transition ease-in-out duration-300`}
          style={{
            boxShadow:
              "0px 4px 16px 0px rgba(101.59302819293477, 150.04578121307893, 190.74609374999997, 0.16)",
          }}
          onClick={() => onSetServiceSelected("outsorcing")}
        >
          <BookUser />
          <p>Outsorcing</p>
          <p>Contable</p>
        </Button>
        <Button
          className={`flex flex-col gap-0.5 items-center  w-32 px-0 py-2 rounded-xl ${serviceSelected === "accounting" ? "bg-primary" : "bg-white"} hover:bg-primary hover:text-white hover:delay-75 transition ease-in-out duration-300`}
          style={{
            boxShadow:
              "0px 4px 16px 0px rgba(101.59302819293477, 150.04578121307893, 190.74609374999997, 0.16)",
          }}
          onClick={() => onSetServiceSelected("accounting")}
        >
          <HandCoins />
          <p>Asesoría</p>
          <p>Contable</p>
        </Button>
        <Button
          className={`flex flex-col gap-0.5 items-center  w-32 px-0 py-2 rounded-xl ${serviceSelected === "labor" ? "bg-primary" : "bg-white"} hover:bg-primary hover:text-white hover:delay-75 transition ease-in-out duration-300`}
          style={{
            boxShadow:
              "0px 4px 16px 0px rgba(101.59302819293477, 150.04578121307893, 190.74609374999997, 0.16)",
          }}
          onClick={() => onSetServiceSelected("labor")}
        >
          <BriefcaseBusiness />
          <p>Asesoría</p>
          <p>Laboral</p>
        </Button>
      </div>
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
  );
};
