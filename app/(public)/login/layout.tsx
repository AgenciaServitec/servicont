import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "../../globals.css";
import React from "react";

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login - ServiCont",
  description: "Tu contabilidad en las mejores manos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${noto.className}`}>{children}</div>;
}
