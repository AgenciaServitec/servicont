"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, Phone } from "lucide-react";
import { Drawer } from "./Drawer";

export const HeaderLayout = (): React.ReactNode => {
  const [isVisible, setIsVisible] = useState(false);

  const onVisibleDrawer = () => setIsVisible(!isVisible);

  return (
    <header className="bg-transparent p-6 w-f text-black flex justify-between items-center">
      <div className="logo grid place-items-center">
        <Link href="/">
          <img
            src="https://servitecperu.com/logotipo-soft.png"
            alt="logo servicont"
            className="w-full max-w-[170px]"
          />
        </Link>
      </div>
      <nav className="hidden md:flex w-auto justify-between items-center px-5 py-2">
        <ul className="w-full flex justify-center items-center gap-5">
          <li>
            <Link href="/" className="hover:text-primary font-bold">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-primary font-bold">
              Sobre nosotros
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-primary font-bold">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="/plans" className="hover:text-primary font-bold">
              Planes
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-white font-bold">
              <div className="flex gap-2 bg-primary text px-2 py-2 rounded-md">
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
    </header>
  );
};
