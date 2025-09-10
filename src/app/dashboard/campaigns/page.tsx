"use client";

import React, { useState } from "react";
import { useCampaigns } from "@/hooks/useCampaigns";
import { useLeads } from "@/hooks/useLeads";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CirclePlus, Clock, Search } from "lucide-react";
import {
  campaignStatusColors,
  campaignStatusSymbols,
  Campaign,
} from "@/components/campaigns/CampaignsTable";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Link from "next/link";

function CampaignPage() {
  const { data: campaigns, isLoading: isCampaignsLoading } = useCampaigns();
  const { data: leads, isLoading: isLeadsLoading } = useLeads();
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const getLeadCount = (campaignName: string) => {
    let count = 0;
    for (const lead of leads || []) {
      if (lead.campaignName === campaignName) {
        count++;
      }
    }
    return count;
  };

  const filteredCampaigns = campaigns
    ?.filter((c: Campaign) =>
      c.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((c: Campaign) => {
      if (statusFilter === "all") return true;
      if (statusFilter === "active") return c.status === "Active";
      if (statusFilter === "inactive") return c.status === "Inactive";
      return true;
    });

  return (
    <div className="p-6 overflow-hidden flex flex-col space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Campaigns</h1>
          <p className="text-sm text-gray-500 mt-1">
            Manage your campaigns and track their performance.
          </p>
        </div>
        <Button className="flex items-center gap-2">
          <CirclePlus size={16} />
          <span>Create Campaign</span>
        </Button>
      </div>
      <div className="flex items-center justify-between">
        <Tabs defaultValue="all" className="shadow-md" onValueChange={setStatusFilter}>
          <TabsList className="flex rounded-md text-sm">
            <TabsTrigger className={statusFilter === "all" ? `flex items-center gap-2 py-1 text-purple-400 px-2 shadow-lg rounded-md cursor-pointer` : `flex items-center gap-2  px-2 rounded-md cursor-pointer`} value="all">All</TabsTrigger>
            <TabsTrigger className={statusFilter === "active" ? `flex items-center gap-2 py-1 text-purple-400 px-2 shadow-lg rounded-md cursor-pointer` : `flex items-center gap-2  px-2 rounded-md cursor-pointer`} value="active">Active</TabsTrigger>
            <TabsTrigger className={statusFilter === "inactive" ? `flex items-center gap-2 py-1 text-purple-400 px-2 shadow-lg rounded-md cursor-pointer` : `flex items-center gap-2  px-2 rounded-md cursor-pointer`} value="inactive">Inactive</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="w-50 rounded-lg  shadow-md bg-white relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-400" />
          <Input
            type="text"
            placeholder="Search campaigns..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-8 text-sm"
          />
        </div>
      </div>

      {/* Table inside Card */}
      <Card className="h-[64vh] flex flex-col">
        <CardContent className="flex-1 overflow-y-auto px-2">
          <Table>
            <TableHeader className="sticky top-0 bg-white z-10">
              <TableRow>
                <TableHead className="w-1/3 text-sm font-semibold text-gray-600">
                  Campaign Name
                </TableHead>
                <TableHead className="w-1/3 text-sm font-semibold text-gray-600 text-center">
                  Status
                </TableHead>
                <TableHead className="w-1/3 text-sm font-semibold text-gray-600 text-right">
                  Total Leads
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredCampaigns?.map((campaign: Campaign) => (
                <TableRow
                  key={campaign.id}
                  className="hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() =>
                    (window.location.href = `/dashboard/campaigns/${campaign.id}`)
                  } // whole row is clickable
                >
                  <TableCell className="text-sm font-medium truncate">
                    <Link
                      href={`/dashboard/campaigns/${campaign.id}`}
                      className="block w-full h-full"
                    >
                      {campaign.name}
                    </Link>
                  </TableCell>
                  <TableCell className="text-center">
                    {campaign.status ? (
                      <span
                        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${campaignStatusColors[campaign.status]}`}
                      >
                        {React.createElement(
                          campaignStatusSymbols[campaign.status] || Clock,
                          { className: "h-3 w-3" }
                        )}
                        {campaign.status}
                      </span>
                    ) : (
                      <span className="text-gray-400 text-xs">No Status</span>
                    )}
                  </TableCell>
                  <TableCell className="text-right">
                    {getLeadCount(campaign.name)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

export default CampaignPage;
