import React from "react";
import {
  Facebook,
  Instagram,
  MailOpen,
  MapPin,
  MessageCircle,
  PhoneCall,
} from "lucide-react";
import { ContactInfo } from "@/app/components";
import { SocialIcon } from "@/app/components/ui/SocialIcon";

export const FooterLayout = (): React.ReactNode => {
  return (
    <div className="pt-10">
      <div className="bg-gray-100 flex flex-col md:flex-row xl:justify-evenly gap-8 px-3 py-10">
        <div className="flex-1 xl:flex-none">
          <h2 className="text-center md:text-left text-secondary uppercase font-bold mb-4">
            Contáctanos
          </h2>
          <div>
            <div className="flex flex-col md:items-start gap-2 md:gap-6">
              <ContactInfo title="Celular" value="+51 987654321">
                <span className="flex md:hidden">
                  <PhoneCall size={28} className="text-primary" />
                </span>
                <span className="hidden md:flex">
                  <PhoneCall size={40} className="text-primary" />
                </span>
              </ContactInfo>
              <ContactInfo
                title="Correo electrónico"
                value="contacto@servicont.com"
              >
                <span className="flex md:hidden">
                  <MailOpen size={28} className="text-primary" />
                </span>
                <span className="hidden md:flex">
                  <MailOpen size={40} className="text-primary" />
                </span>
              </ContactInfo>
              <ContactInfo
                title="Dirección de la oficina"
                value="Calle Vargas 179"
              >
                <span className="flex md:hidden">
                  <MapPin size={28} className="text-primary" />
                </span>
                <span className="hidden md:flex">
                  <MapPin size={40} className="text-primary" />
                </span>
              </ContactInfo>
            </div>
            <div className="flex justify-center items-center gap-3 md:justify-start mt-8">
              <SocialIcon>
                <Facebook size={20} className="text-white" />
              </SocialIcon>
              <SocialIcon>
                <Instagram size={20} className="text-white" />
              </SocialIcon>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 xl:flex-none items-center gap-4 text-center">
          <h2 className="text-3xl font-bold">Conversa con un contador</h2>
          <span className="text-gray-500">Es hora de trabajar juntos</span>
          <a
            href="https://api.whatsapp.com/send/?phone=51900959965"
            target="_blank"
            className="no-underline flex justify-center items-center gap-2 py-2 px-6 bg-green-400 rounded-md text-white font-bold"
          >
            <MessageCircle size={28} />
            <span>Envíanos un whatsApp</span>
          </a>
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
