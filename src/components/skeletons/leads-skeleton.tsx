// components/skeletons/leads-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton"

export function LeadsSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-6 w-1/5" />
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full rounded-lg" />
        ))}
      </div>
    </div>
  )
}
