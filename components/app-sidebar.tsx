"use client";

import * as React from "react";
import {
  BanknoteIcon,
  BoxIcon,
  LifeBuoy,
  LogOut,
  Send,
  UserIcon,
} from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { ThemeToggle } from "@/components/theme-toggle";
import Link from "next/link";
import Image from "next/image";

const data = {
  user: {
    name: "User",
    email: "nmoriano26@gmail.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Perfil",
      url: "#",
      icon: UserIcon,
      isActive: true,
    },
    {
      title: "Plan",
      url: "#",
      icon: BoxIcon,
      isActive: true,
    },
    {
      title: "Pagos",
      url: "#",
      icon: BanknoteIcon,
    },
    {
      title: "Cerrar sesión",
      url: "#",
      icon: LogOut,
      className: "text-red-600",
    },
  ],
  navSecondary: [
    {
      title: "Soporte",
      url: "#",
      icon: LifeBuoy,
    },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <div className="grid grid-cols-[1fr,auto] items-center">
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <a href="#">
                  <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-white text-sidebar-primary-foreground p-[3px]">
                    <Link href="/" className="flex items-center space-x-2">
                      <Image
                        src="/images/isotipo.png"
                        width={120}
                        height={32}
                        alt="ServiCont logo"
                      />
                    </Link>
                  </div>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">ServiCont</span>
                    <span className="truncate text-xs">
                      Servicios Contables
                    </span>
                  </div>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <ThemeToggle />
              </SidebarMenuButton>
            </SidebarMenuItem>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
        <NavUser user={data.user} />
      </SidebarContent>
    </Sidebar>
  );
}