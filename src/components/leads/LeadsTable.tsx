"use client";

import { useLeads } from "@/hooks/useLeads";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton"; // assuming you have a Skeleton component
import { BadgeCheck, Clock, LucideIcon, Send, UserRoundPlus } from "lucide-react";
import React from "react";

export const statusColors: { [key: string]: string } = {
  Pending: "bg-yellow-100 text-yellow-800",
  Contacted: "bg-blue-100 text-blue-800",
  Responded: "bg-purple-100 text-purple-800",
  Converted: "bg-green-100 text-green-800",
};

export const statusSymbols: {[key: string]: LucideIcon} = {
  Pending: Clock,
  Contacted: UserRoundPlus,
  Responded: Send,
  Converted: BadgeCheck,
};

export type Lead = {
  id: number;
  userId?: string; // optional because it's not marked as notNull in your schema
  name: string;
  email: string;
  company?: string | null;
  campaignName?: string | null;
  status?: string | null;
  lastContactDate?: string | null; // dates are usually returned as ISO strings
  phone?: string | null;
  notes?: string | null;
};


export function LeadsTable() {
  const { data: leads, isLoading } = useLeads();

  if (isLoading) {
    return (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-gray-500">Lead</TableHead>
            <TableHead className="text-gray-500">Campaign</TableHead>
            <TableHead className="text-gray-500">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Array.from({ length: 5 }).map((_, i) => (
            <TableRow key={i}>
              <TableCell><Skeleton className="h-4 w-32" /></TableCell>
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
          <TableHead className="text-gray-500">Lead</TableHead>
          <TableHead className="text-gray-500">Campaign</TableHead>
          <TableHead className="text-gray-500 text-center">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leads?.map((lead: Lead) => (
          <TableRow key={lead.id} className="hover:cursor-pointer hover:bg-gray-100"  >
            <TableCell>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate font-medium text-xs">
                  {lead.name}
                </span>
                <span className="truncate text-gray-500 text-xs">
                  {lead.company}
                </span>
              </div>
            </TableCell>
            <TableCell className="text-xs">{lead.campaignName}</TableCell>
            <TableCell className="text-center">
              {lead.status ? (
                <span className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${statusColors[lead.status] || "bg-gray-100 text-gray-800"}`}>
                  {React.createElement(statusSymbols[lead.status] || Clock, { className: "size-3" })}
                  {lead.status}
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
