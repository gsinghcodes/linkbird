import { LinkedInAccountsSkeleton } from "@/components/skeletons/linkedin-accounts-skeleton"
import { CampaignsSkeleton } from "@/components/skeletons/campaigns-skeleton"
import { LeadsSkeleton } from "@/components/skeletons/leads-skeleton"

export default function Loading() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <LinkedInAccountsSkeleton />
      <CampaignsSkeleton />
      <LeadsSkeleton />
    </div>
  )
}
