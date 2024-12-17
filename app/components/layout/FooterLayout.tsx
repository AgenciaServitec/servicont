import React from "react";
import {
  Facebook,
  Instagram,
  LucideMail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { ContactInfo } from "@/app/components";
import { SocialIcon } from "@/app/components/ui/SocialIcon";

export const FooterLayout = (): React.ReactNode => {
  return (
    <div className="bg-gray-100 pt-10">
      <div className="flex flex-col md:flex-row lg:justify-around gap-8 p-6">
        <div className="md:flex-1 lg:flex-none">
          <h2 className="text-center lg:text-left uppercase font-bold mb-4">
            Contáctanos
          </h2>
          <div className="flex flex-col gap-2">
            <ContactInfo title="Celular" value="+51 987654321">
              <Phone size={35} className="mb-4 lg:m-0 text-primary" />
            </ContactInfo>
            <ContactInfo
              title="Correo electrónico"
              value="contacto@servicont.com"
            >
              <LucideMail size={35} className="mb-4 lg:m-0 text-primary" />
            </ContactInfo>
            <ContactInfo
              title="Dirección de la oficina"
              value="Calle Vargas 179"
            >
              <MapPin size={35} className="mb-4 lg:m-0 text-primary" />
            </ContactInfo>
            <div className="flex justify-center items-center gap-3 lg:justify-start">
              <SocialIcon>
                <Facebook size={20} className="text-white" />
              </SocialIcon>
              <SocialIcon>
                <Instagram size={20} className="text-white" />
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-1 lg:flex-none items-center gap-4 text-center">
          <h2 className="text-3xl font-bold">Conversa con un contador</h2>
          <span className="text-gray-500">Es hora de trabajar juntos</span>
          <button className="flex justify-center items-center gap-2 py-2 px-6 bg-green-400 rounded-md text-white font-bold">
            <MessageCircle size={30} />
            <span>Envíanos un whatsApp</span>
          </button>
        </div>
      </div>
      <div className="text-xs text-gray-500 text-center p-6">
        <p>
          &copy;Copyright 2024 - Todos los derechos reservados{" "}
          <a href="#" className="text-yellow-500 font-bold">
            Agencia Servitec
          </a>
        </p>
      </div>
    </div>
  );
};
