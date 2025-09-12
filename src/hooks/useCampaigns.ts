"use client"

import { useQuery } from "@tanstack/react-query"
import axios from "axios"

export const useCampaigns = () => {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: async () => {
      const { data } = await axios.get("/api/campaigns")
      return data
    },
    staleTime: 1000 * 60 * 5,  // keep data fresh for 5 mins
    refetchOnMount: false,     // don’t refetch on component mount
    refetchOnWindowFocus: false, 
    refetchOnReconnect: false,
  })
}