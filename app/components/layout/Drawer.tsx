"use client";
import Link from "next/link";
import { X } from "lucide-react";
import React from "react";

interface Props {
  isVisible?: boolean;
  onVisibleDrawer?: () => void;
}

export function Drawer({ isVisible, onVisibleDrawer }: Props): React.ReactNode {
  return (
    <div
      className={`w-full h-screen flex flex-col bg-primary fixed left-0 top-0 py-6 text-white transform ${isVisible ? "translate-x-0" : "translate-x-full"} duration-300 overflow-hidden z-50`}
    >
      <button className="text-white self-end px-6" onClick={onVisibleDrawer}>
        <X size={30} />
      </button>
      <nav>
        <ul>
          <li className="hover:bg-secondary p-6">
            <Link href="/" onClick={onVisibleDrawer}>
              Inicio
            </Link>
          </li>
          <li className="hover:bg-secondary p-6">
            <Link href="/about-us" onClick={onVisibleDrawer}>
              Sobre nosotros
            </Link>
          </li>
          <li className="hover:bg-secondary p-6">
            <Link href="/services" onClick={onVisibleDrawer}>
              Servicios
            </Link>
          </li>
          <li className="hover:bg-secondary p-6">
            <Link href="/plans" onClick={onVisibleDrawer}>
              Planes
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
