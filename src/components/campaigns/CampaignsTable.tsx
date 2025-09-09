"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { Clock, LucideIcon, ShieldCheck, ShieldOff } from "lucide-react";
import React from "react";
import { useCampaigns } from "@/hooks/useCampaigns";

export type Campaign = {
  id: string;
  name: string;
  status: "Active" | "Inactive";
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

export const campaignStatusColors: { [key: string]: string } = {
  Active: "bg-green-100 text-green-800",
  Inactive: "bg-red-100 text-red-800",
};

export const campaignStatusSymbols: {[key: string]: LucideIcon} = {
  Active: ShieldCheck,
  Inactive: ShieldOff,
};


export function CampaignsTable() {
  const { data: campaigns, isLoading } = useCampaigns();

  if (isLoading) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-500">Campaign</TableHead>
            <TableHead className="text-gray-500">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 3 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell><Skeleton className="h-4 w-40" /></TableCell>
              <TableCell><Skeleton className="h-4 w-24" /></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="text-gray-500">Campaign</TableHead>
          <TableHead className="text-gray-500">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {campaigns?.map((campaign: Campaign) => (
          <TableRow key={campaign.id} className="hover:cursor-pointer hover:bg-gray-100"  >
            <TableCell>
              <div className="truncate font-medium text-xs">
                  {campaign.name}
              </div>
            </TableCell>
            <TableCell className="">
              {campaign.status ? (
                <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${campaignStatusColors[campaign.status]}`}>
                  {React.createElement(campaignStatusSymbols[campaign.status] || Clock, { className: "size-3" })}
                  {campaign.status}
                </span>
              ) : (
                <span className="text-gray-500 text-xs">No Status</span>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
