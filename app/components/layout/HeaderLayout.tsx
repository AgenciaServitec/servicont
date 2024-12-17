import React from "react";
import Link from "next/link";
import { Home } from "lucide-react";

export const HeaderLayout = (): React.ReactNode => {
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
            <nav className="w-auto justify-between items-center px-5 py-2">
                <ul className="w-full flex justify-center items-center gap-5">
                    <li>
                        <Link href="/" className="hover:text-primary font-bold">
                            <Home size={23} />
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
                        <div className="bg-primary text px-2 py-1 rounded-md">
                            <Link href="/contact" className="text-white font-bold">
                                Contacto
                            </Link>
                        </div>
                    </li>
                </ul>
            </nav>
        </header>
    );
};
