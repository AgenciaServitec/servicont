"use client";

import React, { ComponentProps } from "react";
import {
  BoxIcon,
  CreditCard,
  HomeIcon,
  type LucideIcon,
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
import { useSession } from "next-auth/react";
import { SkeletonAvatar } from "@/components/SkeletonAvatar";
import { SkeletonMenu } from "@/components/SkeletonMenu";
import { Skeleton } from "@/components/ui/skeleton";

interface AppSidebarDataProps extends ComponentProps<typeof Sidebar> {
  user: User;
  navMain: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
  navSecondary: {
    title: string;
    url: string;
    icon: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}

export const AppSidebarIntegration = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const { data: session, status } = useSession();
  const isLoadingSession = status === "loading";

  const data: AppSidebarDataProps = {
    user: session?.user as User,
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
        title: "Facturación",
        url: "/dashboard/billing",
        icon: CreditCard,
      },
    ],
    navSecondary: [
      {
        title: "Feedback",
        url: "#",
        icon: Send,
      },
    ],
  };

  return (
    <AppSidebar data={data} isLoadingSession={isLoadingSession} {...props} />
  );
};

interface AppSidebarProps {
  data: AppSidebarDataProps;
  isLoadingSession: boolean;
}

const AppSidebar = ({ data, isLoadingSession, ...props }: AppSidebarProps) => {
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
        {isLoadingSession ? (
          <div className="flex flex-col justify-between w-full h-full space-y-5">
            <SkeletonMenu />
            <div className="space-y-6">
              <div className="flex items-center space-x-3 w-full">
                <div className="space-y-3 w-full">
                  <Skeleton className="h-6 w-full" />
                </div>
              </div>
              <SkeletonAvatar />
            </div>
          </div>
        ) : (
          <>
            <NavMain items={data.navMain} />
            <NavSecondary items={data.navSecondary} className="mt-auto" />
            <NavUser user={data.user} />
          </>
        )}
      </SidebarContent>
    </Sidebar>
  );
};
