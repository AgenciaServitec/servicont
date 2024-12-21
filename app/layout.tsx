import type { Metadata } from "next";
import { Noto_Sans_Display } from "next/font/google";
import "./globals.css";
import React from "react";
import { PublicLayout } from "@/app/PublicLayout";

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${noto.className}`}>
        <PublicLayout>{children}</PublicLayout>
      </body>
    </html>
  );
}
