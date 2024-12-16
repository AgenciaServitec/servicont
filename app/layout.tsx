import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import React from "react";
import { FooterLayout, HeaderLayout } from "@/app/components";

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
      <body className={noto.className}>
        <HeaderLayout />
        <div className="content min-h-[80svh]">{children}</div>
        <FooterLayout />

        <script src="https://unpkg.com/lucide@latest/dist/umd/lucide.js"></script>
        <script src="https://unpkg.com/lucide@latest"></script>
        <script>lucide.createIcons();</script>
      </body>
    </html>
  );
}
