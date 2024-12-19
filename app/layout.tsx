import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import React from "react";
import { HeaderLayout } from "@/components/layout/HeaderLayout";
import { FooterLayout } from "@/components/layout/FooterLayout";

const noto = Noto_Sans_Display({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Servicont",
  description: "Tu contabilidad en las mejores manos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${noto.className}`}>
        <HeaderLayout />
        <main className="content min-h-[80svh]">{children}</main>
        <FooterLayout />
      </body>
    </html>
  );
}
