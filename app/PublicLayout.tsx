"use client";
import React from "react";
import { HeaderLayout } from "@/components/layout/public/HeaderLayout";
import { FooterLayout } from "@/components/layout/public/FooterLayout";
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode;
}

export const PublicLayout = ({ children }: Props) => {
  const pathname = usePathname();

  const isDashboard = pathname.includes("dashboard");

  return (
    <div className="w-full h-auto">
      {!isDashboard && <HeaderLayout />}
      <main className="content min-h-[80svh]">{children}</main>
      {!isDashboard && <FooterLayout />}
    </div>
  );
};
