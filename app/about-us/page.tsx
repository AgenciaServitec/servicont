import React from "react";
import { AboutCompanyComponent } from "@/app/about-us/AboutCompanyComponent";

export default function AboutUsPage(): React.ReactNode {
  return (
    <div className="w-full">
      <div className="relative w-full bg-[url('/images/office.webp')] bg-bottom object-cover bg-no-repeat bg-cover flex flex-col gap-5 px-12 py-14 justify-center text-">
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 flex flex-col gap-6">
          <p className="text-5xl font-bold mb-3 text-white">¿Quiénes Somos?</p>
          <p className="text-xl font-semibold text-white">
            Conoce más sobre nosotros
          </p>
        </div>
      </div>
      <AboutCompanyComponent />
    </div>
  );
}
