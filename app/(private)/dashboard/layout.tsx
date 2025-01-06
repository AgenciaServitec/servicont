import React from "react";
import { BodyLayout } from "@/components/layout/private/BodyLayout";

export const metadata = {
  title: "ServiCont - Dashboard",
  description: "Panel de control de la aplicación.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  return <BodyLayout>{children}</BodyLayout>;
}
