"use client"

import CustomButton from '@/components/custom-button';
import LeadCard from '@/components/leads/LeadCard';
import { statusColors, statusSymbols } from '@/components/leads/LeadsTable';
import SegmentedProgress from '@/components/segmented-progressbar';
import VerticalLinearStepper from '@/components/stepper-progress';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Skeleton } from '@/components/ui/skeleton';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useLeads } from '@/hooks/useLeads';
import { Lead } from '@/stores/leadStore';
import { Clock } from 'lucide-react';
import React from 'react';

type StatusLevel = {
  value: number;
  color: string;
}

export const statusLevelMap: Record<string, StatusLevel> = {
  "Pending": {
    value: 1,
    color: "red"
  },
  "Contacted": {
    value: 2,
    color: "orange"
  },
  "Responded": {
    value: 3,
    color: "yellow"
  },
  "Converted": {
    value: 4,
    color: "green"
  },
};

export default function Page() {
  const { data: leads, isLoading } = useLeads();

  if (isLoading) {
    return (
      <Card>
        <CardContent>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-500">Name</TableHead>
                <TableHead className="text-gray-500">Campaign name</TableHead>
                <TableHead className="text-gray-500 text-center">Activity</TableHead>
                <TableHead className="text-gray-500 text-center">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 5 }).map((_, i) => (
                <TableRow key={i}>
                  <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-40" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                  <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className='h-full flex flex-col'>
      <CardContent className='flex-1 overflow-y-auto px-4'>
        <Table>
          <TableHeader className="">
            <TableRow>
              <TableHead className="text-gray-500">Name</TableHead>
              <TableHead className="text-gray-500">Campaign name</TableHead>
              <TableHead className="text-gray-500 text-center">Activity</TableHead>
              <TableHead className="text-gray-500 text-center">Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leads?.map((lead: Lead) => (
              <Sheet key={lead.id}>
                <SheetTrigger asChild>
                  <TableRow className="hover:bg-gray-100 cursor-pointer">
                    {/* Name Cell */}
                    <TableCell className="py-2">
                      <div className="flex flex-col overflow-hidden">
                        <span className="truncate font-medium text-xs">{lead.name}</span>
                        <span className="truncate text-gray-500 text-xs">{lead.company}</span>
                      </div>
                    </TableCell>

                    {/* Campaign Name */}
                    <TableCell className="py-2 text-xs">
                      {lead.campaignName}
                    </TableCell>

                    {/* Activity / Segmented Progress */}
                    <TableCell className="pb-2 flex justify-center">
                      <SegmentedProgress
                        value={statusLevelMap[lead.status]?.value || 0}
                        color={statusLevelMap[lead.status]?.color || "gray"}
                      />
                    </TableCell>

                    {/* Status */}
                    <TableCell className="py-2 text-center">
                      <CustomButton
                        icon={statusSymbols[lead.status]}
                        color={statusColors[lead.status]}
                        text={lead.status}
                      />
                    </TableCell>
                  </TableRow>
                </SheetTrigger>

                {/* Sheet Content */}
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Lead Profile</SheetTitle>
                  </SheetHeader>

                  {/* Move your custom content OUTSIDE the description */}
                  <div className="px-3">
                    <LeadCard lead={lead} />
                    <div className="p-3 pt-5">
                      <VerticalLinearStepper status={lead.status} />
                    </div>
                  </div>
                </SheetContent>

              </Sheet>
            ))}
          </TableBody>

        </Table>
      </CardContent>
    </Card>
  );
}
