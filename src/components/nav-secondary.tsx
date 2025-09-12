import * as React from "react"
import { type LucideIcon } from "lucide-react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"

export function NavSecondary({
  items,
  ...props
}: {
  items: {
    url: string
    icon: LucideIcon
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent className="flex justify-around items-center">
          {items.map((item, index) => (
            <Link key={index} href={item.url}>
              <item.icon size={15} />
            </Link>
          ))}
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
