// components/skeletons/linkedin-accounts-skeleton.tsx
import { Skeleton } from "@/components/ui/skeleton"

export function LinkedInAccountsSkeleton() {
  return (
    <div className="space-y-3">
      <Skeleton className="h-6 w-1/3" /> {/* section title */}
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-10 w-full rounded-lg" />
        ))}
      </div>
    </div>
  )
}
