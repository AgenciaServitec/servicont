import React from "react";
import { ChevronRight, House } from "lucide-react";
import Link from "next/link";
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
          <div className="w-full flex items-center gap-3 font-semibold text-white">
            <Link
              className="flex items-center gap-3 hover:text-blue-950"
              href="/"
            >
              <House />
              Inicio
            </Link>
            <ChevronRight />
            <Link href="/about-us" className="hover:text-blue-950">
              Nosotros
            </Link>
          </div>
        </div>
      </div>
      <AboutCompanyComponent />
    </div>
  );
}
