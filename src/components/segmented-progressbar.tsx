"use client"

import { cn } from "@/lib/utils"

const colorMap: Record<string, string> = {
  red: "bg-red-500",
  orange: "bg-orange-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
};

export default function SegmentedProgress({ value, color }: { value: number, color: string }) {
  const segments = 4

  return (
    <div className="flex gap-1 h-10 items-end"> {/* increase height for visibility */}
      {[...Array(segments)].map((_, i) => {
        const filled = i < value
        return (
          <div
            key={i}
            className={cn(
              "transition-all",
              "bg-gray-200",
              filled && colorMap[color],
              "w-1",
              "rounded-2xl",
              "h-5" // super thin width
            )}
          />
        )
      })}
    </div>
  )
}
