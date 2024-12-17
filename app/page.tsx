"use client";
import { Button } from "@/app/components/ui/button";
import React from "react";

import {
  BookUser,
  HandCoins,
  BriefcaseBusiness,
  CircleArrowRight,
} from "lucide-react";
import { ServiceComponent } from "@/app/services/ServiceComponent";
import { services } from "@/app/data-list";

export default function Home() {
  const [isVisible, setIsVisible] = React.useState("contable");

  return (
    <div className="w-full h-full font-sans p-6">
      <div>
        <h1 className="text-4xl font-bold mb-3">Home page</h1>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          cumque deleniti, eos expedita facere obcaecati, odit officia officiis
        </p>
      </div>
      <div className="mt-4">
        <Button className="flex justify-center w-full mt-4 pl-4 pr-4 py-2 text-base rounded min-h-min shadow-[0_4px] whitespace-pre bg-primary text-white hover:bg-primaryLight1 shadow-primaryDark2">
          Click me!
        </Button>
      </div>
      <div className="w-full mx-0 my-20 flex flex-col items-center gap-12">
        <div className="flex flex-col items-center ">
          <p className="font-sans text-2xl text-primary">
            Servitec Estudio Contable
          </p>
          <p className="font-bold text-4xl">Brindamos lo necesario para una</p>
          <p className="font-bold text-4xl text-secondary">
            buena contabilidad en tu negocio
          </p>
        </div>
        <div className="flex gap-6">
          <Button
            className="flex flex-col gap-0.5 items-center bg-blue-600 w-32 px-0 py-2 rounded-xl"
            style={{
              boxShadow:
                "0px 4px 16px 0px rgba(101.59302819293477, 150.04578121307893, 190.74609374999997, 0.16)",
            }}
            onClick={() => setIsVisible("contable")}
          >
            <BookUser />
            <p>Outsorcing</p>
            <p>Contable</p>
          </Button>
          <Button
            className="flex flex-col gap-0.5 items-center  w-32 px-0 py-2 rounded-xl bg-white hover:bg-blue-600"
            style={{
              boxShadow:
                "0px 4px 16px 0px rgba(101.59302819293477, 150.04578121307893, 190.74609374999997, 0.16)",
            }}
            onClick={() => setIsVisible("contable2")}
          >
            <HandCoins />
            <p>Asesoría</p>
            <p>Contable</p>
          </Button>
          <Button
            className="flex flex-col gap-0.5 items-center  w-32 px-0 py-2 rounded-xl  bg-white hover:bg-blue-600"
            style={{
              boxShadow:
                "0px 4px 16px 0px rgba(101.59302819293477, 150.04578121307893, 190.74609374999997, 0.16)",
            }}
            onClick={() => setIsVisible("contable3")}
          >
            <BriefcaseBusiness />
            <p>Asesoría</p>
            <p>Laboral</p>
          </Button>
        </div>
        <div className="w-full flex flex-col items-center">
          {services.map(
            (service, index) =>
              isVisible === service.code && (
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
                  direction={service.direction}
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
}
