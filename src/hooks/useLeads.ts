"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useLeads = () => {
  return useQuery({
    queryKey: ["leads"],
    queryFn: async () => {
      const { data } = await axios.get("/api/leads");
      return data;
    },
  });
};
