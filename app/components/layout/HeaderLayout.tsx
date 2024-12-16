import React from "react";
import Link from "next/link";

export const HeaderLayout = (): React.ReactNode => {
  return (
    <header className="bg-background p-6 w-f bg-blue-950 text-cyan-50 flex justify-between align-center">
      <div className="logo grid place-items-center">
        <Link href="/">
          <img
            src="https://servitecperu.com/logotipo-soft.png"
            alt="logo servicont"
            className="w-full max-w-[170px]"
          />
        </Link>
      </div>
      <nav className="w-auto justify-between items-center px-5 py-2">
        <ul className="w-full flex justify-center gap-5">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="/about-us">Sobre nosotros</Link>
          </li>
          <li>
            <Link href="/services">Servicios</Link>
          </li>
          <li>
            <Link href="/plans">Planes</Link>
          </li>
          <li>
            <Link href="/contact">Contacto</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
