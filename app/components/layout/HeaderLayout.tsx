"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Drawer } from "./Drawer";
import { ContentWrapper } from "@/app/components/ui/ContentWrapper";
import Image from "next/image";

export const HeaderLayout = (): React.ReactNode => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibleDrawer = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isVisible]);

  return (
    <header className="w-full bg-transparent backdrop-blur-sm fixed top-0 left-0 z-40">
      <ContentWrapper>
        <div className="w-full p-6 w-f text-black flex justify-between items-center">
          <div className="logo grid place-items-center">
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={170}
                height={42}
                alt="logo servicont"
                className="w-full max-w-[200px] h-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex w-auto justify-between items-center px-5 py-2">
            <ul className="w-full flex justify-center items-center gap-5">
              <li>
                <Link href="/" className="hover:text-primary font-500">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-primary font-500">
                  Sobre nosotros
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-primary font-500">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-primary font-500">
                  Planes
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white font-500">
                  <div className="flex gap-2 bg-primary text px-5 py-2 rounded-md">
                    <Phone size={23} />
                    <span>Contacto</span>
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
          <button
            className="md:hidden bg-primary rounded-md p-1"
            onClick={onVisibleDrawer}
          >
            <Menu size={30} className="text-white" />
          </button>
          <Drawer isVisible={isVisible} onVisibleDrawer={onVisibleDrawer} />
        </div>
      </ContentWrapper>
    </header>
  );
};
