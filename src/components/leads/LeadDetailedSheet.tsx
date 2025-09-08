// components/leads/LeadDetailSheet.tsx
"use client"

import { Sheet, SheetContent } from "@/components/ui/sheet"
import { useLeadStore } from "@/stores/leadStore"

export default function LeadDetailSheet() {
  const { selectedLead, setSelectedLead } = useLeadStore()

  return (
    <Sheet open={!!selectedLead} onOpenChange={() => setSelectedLead(null)}>
      <SheetContent side="right" className="w-[500px]">
        {selectedLead ? (
          <div>
            <h2 className="text-xl font-bold">{selectedLead.name}</h2>
            <p>Email: {selectedLead.email}</p>
            <p>Company: {selectedLead.company}</p>
            <p>Campaign: {selectedLead.campaignName}</p>
            <p>Status: {selectedLead.status}</p>
            <p>Last Contact: {selectedLead.lastContactDate}</p>
            {/* Add actions here */}
          </div>
        ) : null}
      </SheetContent>
    </Sheet>
  )
}
