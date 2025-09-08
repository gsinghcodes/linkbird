"use client"

import * as React from "react"
import {
  House,
  IdCard,
  FlaskConical,
  Linkedin,
  Settings,
  Mail,
} from "lucide-react"

import Image from "next/image"

import { NavOverview } from "@/components/nav-overview"
import { NavSettings } from "@/components/nav-settings"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const data = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: House,
      isActive: true,
    },
    {
      title: "Leads",
      url: "#",
      icon: IdCard,
    },
    {
      title: "Campaign",
      url: "#",
      icon: FlaskConical,
    },
    {
      title: "Messages",
      url: "#",
      icon: Mail,
    },
    {
      title: "Linkedin Accounts",
      url: "#",
      icon: Linkedin,
    }
  ],
  projects: [
    {
      name: "Setting & Billing",
      url: "#",
      icon: Settings,
    },
  ],
}

export function AppSidebarHome({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="flex items-center justify-center" asChild>
              <a href="#">
                <Image width={150} height={150} src="linkbird-light-logo.svg" alt="Linkbird" />
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
      </div>
      <SidebarContent>
        {/* for overview on sidebar */}
        <NavOverview items={data.navMain} />
        {/* for settings on sidebar */}
        <NavSettings projects={data.projects} />
      </SidebarContent>
    </Sidebar>
  )
}
