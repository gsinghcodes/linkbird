"use client";

import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import SegmentedProgress from "../segmented-progressbar";
import CustomButton from "../custom-button";
import { Card, CardContent } from "../ui/card";
import { Lead } from "@/stores/leadStore";
import { statusColors, statusSymbols } from "../leads/LeadsTable";
import { statusLevelMap } from "@/app/dashboard/leads/page";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import LeadCard from "../leads/LeadCard";
import VerticalLinearStepper from "../stepper-progress";

function Leads({ leads }: { leads: Lead[] }) {
  return (
    <div>
      <Card className="h-full flex flex-col">
        <CardContent className="flex-1 overflow-y-auto px-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="text-gray-500">Lead Name</TableHead>
                <TableHead className="text-gray-500">Lead Company</TableHead>
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
                        </div>
                      </TableCell>

                      {/* Company Name Cell */}
                      <TableCell className="py-2 text-xs">{lead.company}</TableCell>

                      {/* Activity / Segmented Progress Cell */}
                      <TableCell className="pb-2 flex justify-center">
                        <div className="mb-2">
                          <SegmentedProgress
                            value={statusLevelMap[lead.status]?.value || 0}
                            color={statusLevelMap[lead.status]?.color || "gray"}
                          />
                        </div>
                      </TableCell>

                      {/* Status Cell */}
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
                      {/* keep description minimal to avoid hydration error */}
                    </SheetHeader>
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
    </div>
  );
}

export default Leads;
