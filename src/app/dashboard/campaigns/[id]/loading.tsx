import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function Loading() {
  return (
    <div className="p-6 flex flex-col space-y-6 animate-pulse">

      {/* Header */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-64" /> {/* Title */}
        <Skeleton className="h-4 w-80" /> {/* Subtitle */}
      </div>

      {/* Tabs */}
      <div className="flex gap-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-8 w-24 rounded-md" />
        ))}
      </div>

      {/* Content */}
      <Card className="flex-1">
        <CardContent className="space-y-4">

          {/* Overview Skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-6 w-40" /> {/* Campaign Name */}
            <Skeleton className="h-4 w-32" /> {/* Status / Date */}
          </div>

          {/* Lead stats */}
          <div className="flex gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-16 w-16 rounded-md" />
            ))}
          </div>

          {/* Optional: Table / Sequence Skeleton */}
          <div className="space-y-2 mt-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-6 w-full rounded-md" />
            ))}
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
