import React from "react";
import { Button } from "@/app/components";
import { services } from "@/data-list";

interface Props {
  serviceSelected: string;
  onSetServiceSelected: (service: string) => void;
}

export const ButtonsServicesSectionComponent = ({
  serviceSelected,
  onSetServiceSelected,
}: Props): React.ReactNode => {
  return (
    <div className="flex flex-wrap gap-6 justify-center px-4">
      {services.map((service, index) => (
        <Button
          key={index}
          className={`flex flex-col gap-0.5 items-center justify-center w-32 py-4 px-20 rounded-xl ${serviceSelected === service.code ? "bg-primary text-white" : "bg-white"} hover:bg-primary hover:text-white hover:delay-75 transition ease-in-out duration-300`}
          style={{
            boxShadow:
              "0px 4px 16px 0px rgba(101.59302819293477, 150.04578121307893, 190.74609374999997, 0.16)",
          }}
          onClick={() => onSetServiceSelected(service.code)}
        >
          <service.icon className="w-10 h-10" />
          {service.title}
        </Button>
      ))}
    </div>
  );
};
