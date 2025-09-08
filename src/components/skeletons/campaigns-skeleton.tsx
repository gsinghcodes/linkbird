// components/skeletons/campaigns-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton"

export function CampaignsSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-6 w-1/4" />
      <div className="space-y-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full rounded-lg" />
        ))}
      </div>
    </div>
  )
}
