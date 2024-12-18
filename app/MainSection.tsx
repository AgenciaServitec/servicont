import { ArrowRight, CircleArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
import { ContentWrapper } from "@/app/components/ui/ContentWrapper";

export function MainSection() {
  return (
    <ContentWrapper>
      <div className="w-full flex flex-col md:flex-row justify-between md:items-center px-4">
        <div>
          <p className="text-xl text-primary font-medium">
            Estudio Contable en Lima
          </p>
          <h2 className="flex flex-col font-extrabold text-4xl lg:text-5xl my-6 md:my-4">
            Tu negocio al día y <br />
            <span className="text-primary">con cero multas</span>
          </h2>
          <div className="flex flex-col gap-8 md:gap-6">
            <ul className="flex flex-col gap-4 text-gray-500">
              <li className="flex items-center gap-2">
                <CircleArrowRight
                  size={16}
                  className="text-white bg-secondary rounded-full"
                />
                Declaración de impuestos mensuales (PDT)
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight
                  size={16}
                  className="text-white bg-secondary rounded-full"
                />
                Outsourcing contable
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight
                  size={16}
                  className="text-white bg-secondary rounded-full"
                />
                Asesoría Contable y Tributaria
              </li>
              <li className="flex items-center gap-2">
                <CircleArrowRight
                  size={16}
                  className="text-white bg-secondary rounded-full"
                />
                Cálculo de Planillas (PLANES)
              </li>
            </ul>
            <div className="flex items-center gap-2">
              <button className="text-sm font-bold border-2 border-secondary rounded-xl text-secondary uppercase px-5 py-2 hover:bg-secondary hover:text-white transition duration-500">
                Ver Planes
              </button>
              <button className="text-sm flex items-center gap-2 font-bold border-2 border-secondary rounded-xl bg-secondary uppercase text-white px-5 py-2 hover:bg-white hover:text-secondary duration-500">
                <span>Conversemos</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
        <div className="hidden md:flex lg:mr-10">
          <Image
            src="/images/image-banner.webp"
            width={250}
            height={100}
            alt="img"
          />
        </div>
      </div>
    </ContentWrapper>
  );
}
