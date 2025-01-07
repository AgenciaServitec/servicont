"use client";

import React from "react";
import { BanknoteIcon, BoxIcon, HomeIcon, Send, UserIcon } from "lucide-react";
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
    email: "Admin@",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Inicio",
      url: "/dashboard",
      icon: HomeIcon,
      isActive: true,
    },
    {
      title: "Perfil",
      url: "/dashboard/profile",
      icon: UserIcon,
      isActive: true,
    },
    {
      title: "Plan",
      url: "/dashboard/plan",
      icon: BoxIcon,
      isActive: true,
    },
    {
      title: "Pagos",
      url: "/dashboard/payments",
      icon: BanknoteIcon,
    },
  ],
  navSecondary: [
    // {
    //   title: "Soporte",
    //   url: "#",
    //   icon: LifeBuoy,
    // },
    {
      title: "Feedback",
      url: "#",
      icon: Send,
    },
  ],
};

export const AppSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <div className="grid grid-cols-[1fr,auto] items-center">
            <SidebarMenuItem>
              <SidebarMenuButton size="lg" asChild>
                <div>
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
                </div>
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
};
