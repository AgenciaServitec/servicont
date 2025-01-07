"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, UserIcon } from "lucide-react";
import { Drawer } from "./Drawer";
import { ContentWrapper } from "@/components/ui-custom/ContentWrapper";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export const HeaderLayout = (): React.ReactNode => {
  const pathname = usePathname();

  const [isVisible, setIsVisible] = useState<boolean>(false);
  const onVisibleDrawer = () => setIsVisible(!isVisible);

  useEffect(() => {
    if (isVisible) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isVisible]);

  const isHomePage = pathname === "/";

  return (
    <header
      className={`w-full bg-transparent top-0 left-0 z-40 ${isHomePage ? "backdrop-blur-sm fixed" : "relative"}`}
    >
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
                <Button variant="secondary" className="flex gap-2">
                  <Link
                    href="/contact"
                    className="flex gap-2 text-white font-500 items-center"
                  >
                    <UserIcon size={23} />
                    <span>Contacto</span>
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="secondary" className="flex gap-2">
                  <Link
                    href="/login"
                    className="flex gap-2 text-white font-500 items-center"
                  >
                    <UserIcon size={23} />
                    <span>Iniciar sesión</span>
                  </Link>
                </Button>
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
