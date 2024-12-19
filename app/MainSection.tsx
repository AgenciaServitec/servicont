import {
  ArrowRight,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  CircleArrowRight,
  Search,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import { ContentWrapper } from "@/app/components/ui/ContentWrapper";

export function MainSection() {
  return (
    <div
      className="h-[80svh]"
      style={{
        backgroundImage: "url('/images/bg-aqua-mark.webp')",
        backgroundSize: "cover",
      }}
    >
      <ContentWrapper>
        <div className="w-full flex flex-col md:flex-row justify-between md:items-center px-4 pt-32 lg:pt-28">
          <div>
            <p className="text-xl lg:text-2xl text-primary font-medium">
              Estudio Contable en Lima
            </p>
            <h2 className="flex flex-col font-extrabold text-4xl lg:text-6xl my-6 md:my-4">
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
              <div className="flex items-center gap-2 md:gap-4">
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
          <div className="hidden md:flex lg:mr-10 relative">
            <div className="flex items-center gap-2 bg-white absolute rounded-xl px-4 py-2 shadow-lg top-20 -left-28">
              <Search size={30} />
              <div className="flex flex-col text-sm">
                <span className="font-bold">Asesoría</span>
                <span>Contable y Tributaria</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white absolute rounded-xl px-4 py-2 shadow-lg top-52 -left-40 lg:-left-52">
              <ChartNoAxesCombined size={30} />
              <div className="flex flex-col text-sm">
                <span className="font-bold">Declaración de</span>
                <span>Impuestos</span>
              </div>
            </div>
            <div className="flex items-center gap-2 bg-white absolute rounded-xl px-4 py-2 shadow-lg top-80 left-0">
              <BriefcaseBusiness size={30} />
              <div className="flex flex-col text-sm">
                <span className="font-bold">Asesoría</span>
                <span>Laboral</span>
              </div>
            </div>
            <Image
              src="/images/image-banner.webp"
              width={250}
              height={100}
              alt="img"
              className="lg:w-[280px]"
            />
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}
