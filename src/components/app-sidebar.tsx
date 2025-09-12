"use client"

import * as React from "react"
import {
  House,
  IdCard,
  FlaskConical,
  Linkedin,
  Settings,
  Mail,
  ChartColumnBig,
  SquareActivity,
  MessageSquareText,
  Cable,
  Headset,
  Moon,

} from "lucide-react"

import Image from "next/image"

import { NavOverview } from "@/components/nav-overview"
import { NavSettings } from "@/components/nav-settings"
import { NavAdmin } from "@/components/nav-admin"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

type User = {
  id: string
  createdAt: Date
  updatedAt: Date
  email: string
  emailVerified: boolean
  name: string
  image?: string | null
}

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  user: User
}

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
      url: "/dashboard/leads",
      icon: IdCard,
    },
    {
      title: "Campaign",
      url: "/dashboard/campaigns",
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
  navSecondary: [
    {
      url: "#",
      icon: MessageSquareText,
    },
    {
      url: "#",
      icon: Cable,
    },
    {
      url: "#",
      icon: Headset,
    },
    {
      url: "#",
      icon: Moon,
    },
  ],
  projects: [
    {
      name: "Setting & Billing",
      url: "#",
      icon: Settings,
    },
  ],
  admin: [
    {
      name: "Activity logs",
      url: "#",
      icon: SquareActivity,
    },
    {
      name: "User logs",
      url: "#",
      icon: ChartColumnBig,
    },
  ]
}

export function AppSidebar({ user, ...props }: AppSidebarProps) {

  return (
    <Sidebar variant="floating" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" className="flex items-center justify-center" asChild>
              <Link href="#">
                <Image width={150} height={150} src="/linkbird-light-logo.svg" alt="Linkbird" />
              </Link>
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
        {/* for admin panel on sidebar */}
        <NavAdmin projects={data.admin} />
        {/* right over user info */}
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  )
}
