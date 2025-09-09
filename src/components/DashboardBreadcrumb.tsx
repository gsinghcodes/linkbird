"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { useCampaigns } from "@/hooks/useCampaigns"
import { Campaign } from "./campaigns/CampaignsTable"

export function DashboardBreadcrumb() {
  const pathname = usePathname()
  const segments = pathname.split("/").filter(Boolean)
  const { data: campaigns } = useCampaigns()

  // Helper: get campaign name from ID
  const getCampaignName = (id: string) => {
    return campaigns?.find((c: Campaign) => c.id === id)?.name || id
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const href = "/" + segments.slice(0, index + 1).join("/")
          const isLast = index === segments.length - 1

          // If this is the campaigns detail page last segment → show name
          const displayText =
            index === segments.length - 1 && segments[index - 1] === "campaigns"
              ? getCampaignName(segment)
              : segment.replace("-", " ")

          return (
            <React.Fragment key={href}>
              <BreadcrumbItem>
                {isLast ? (
                  <BreadcrumbPage className="capitalize">{displayText}</BreadcrumbPage>
                ) : (
                  <BreadcrumbLink href={href} className="capitalize">
                    {displayText}
                  </BreadcrumbLink>
                )}
              </BreadcrumbItem>
              {!isLast && <BreadcrumbSeparator />}
            </React.Fragment>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
