import React from "react";
import Image from "next/image";

export const AboutCompanyComponent = () => {
  return (
    <div className="w-full lg:flex lg:flex-row px-10 py-10 flex flex-col">
      <div className="lg:w-6/12 w-full px-6 py-20 flex gap-6 justify-center items-center">
        <div className="relative bg-gray-500 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-black/60 via-transparent to-transparent rounded-3xl z-10 pointer-events-none"></div>
          <div className="relative z-20">
            <Image
              width={300}
              height={250}
              src="/images/founder.png"
              alt="logo servicont"
              className="object-contain"
            />
          </div>
        </div>

        <div className="relative bg-gray-500 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-black/20 bg-gradient-to-b from-black/60 via-transparent to-transparent rounded-3xl z-10 pointer-events-none"></div>
          <div className="relative z-20">
            <Image
              width={200}
              height={250}
              src="/images/founder2.png"
              alt="logo servicont"
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="lg:w-6/12 w-full px-6 py-12 flex flex-col justify-center gap-6">
        <div className="">
          <p className="text-blue-950 text-4xl font-semibold">
            SERVITEC ESTUDIO CONTABLE:
          </p>
          <p className="text-blue-950 text-4xl font-semibold">
            TU ALIADO EMPRESARIAL
          </p>
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <p>
            Fundado en Diciembre del 2024 por el Ing. Roberto Alcides Mendoza
            Perca y su socio Sergio Daniel Lizano Inga, Servitec Estudio
            Contable se ha convertido en un referente en el ámbito contable en
            Lima. Con una vocación excepcional, nuestros fundadores han
            construido un estidio basado en valores sólidos y un compromiso
            inquebrantable con la excelencia.
          </p>
          <p>
            Nuestra visión empresarial es la de ser un apoyo firme y confiable
            para nuestros clientes. Nos esforzamos por ofrecer servicios
            contables integrales con integridad, esfuerzo y compromiso en cada
            proyecto.
          </p>
          <p>
            En Servitec Estudio Contable, entendemos que el crecimiento
            sostenible de su empresa es primordial. Nuestro objetivo es
            proporcionar una gestión administrativa experta, permitiéndole
            concentrarse en su negocio principal. Esta dedicación nos ha ganado
            el reconocimiento y la confianza de una amplia cartera de clientes
            tanto nacionales como extranjeros, provenientes de diversos sectores
            económicos.
          </p>
        </div>
      </div>
    </div>
  );
};
