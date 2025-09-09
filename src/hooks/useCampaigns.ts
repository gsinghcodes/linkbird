"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCampaigns = () => {
  return useQuery({
    queryKey: ["campaigns"],
    queryFn: async () => {
      const { data } = await axios.get("/api/campaigns");
      return data;
    },
    staleTime: 1000 * 60 * 5
  });
};
