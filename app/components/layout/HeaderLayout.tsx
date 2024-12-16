import React from "react";

export const HeaderLayout = (): React.ReactNode => {
  return (
    <header className="bg-background p-6 w-f bg-blue-950 text-cyan-50 flex justify-between align-center">
      <div className="logo grid place-items-center">
        <h1>Mi Encabezado</h1>
      </div>
      <nav className="w-auto justify-between items-center px-5 py-2">
        <ul className="w-full flex justify-center gap-5">
          <li>
            <a href="/public">Inicio</a>
          </li>
          <li>
            <a href="/about">Acerca</a>
          </li>
          <li>
            <a href="/contact">Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
