// store/leadStore.ts
import { create } from "zustand"

export type Lead = {
  id: string
  name: string
  email: string
  company: string
  campaignName: string
  status: string
  lastContactDate: string
}

interface LeadStore {
  search: string
  status: string
  selectedLead: Lead | null
  setSearch: (value: string) => void
  setStatus: (value: string) => void
  setSelectedLead: (lead: Lead | null) => void
}

export const useLeadStore = create<LeadStore>((set) => ({
  search: "",
  status: "",
  selectedLead: null,
  setSearch: (value) => set({ search: value }),
  setStatus: (value) => set({ status: value }),
  setSelectedLead: (lead) => set({ selectedLead: lead }),
}))
