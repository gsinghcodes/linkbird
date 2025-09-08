"use client";

import { useLeads } from "@/hooks/useLeads";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton"; // assuming you have a Skeleton component

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
            <TableHead>Lead</TableHead>
            <TableHead>Campaign</TableHead>
            <TableHead>Status</TableHead>
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
          <TableHead>Lead</TableHead>
          <TableHead>Campaign</TableHead>
          <TableHead>Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {leads?.map((lead: Lead) => (
          <TableRow key={lead.id}>
            <TableCell>
              <div className="flex flex-col overflow-hidden">
                <span className="truncate font-medium text-xs">
                  {lead.name}
                </span>
                <span className="truncate text-gray-500 text-xs">
                  {lead.email}
                </span>
                <span className="truncate text-gray-500 text-xs">
                  {lead.company}
                </span>
              </div>
            </TableCell>
            <TableCell className="text-xs">{lead.campaignName}</TableCell>
            <TableCell>{lead.status}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
