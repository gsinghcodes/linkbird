"use client";

import { useParams } from "next/navigation";
import { useCampaigns } from "@/hooks/useCampaigns";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Users } from "lucide-react";
import { Campaign, campaignStatusColors, campaignStatusSymbols } from "@/components/campaigns/CampaignsTable";
import React from "react";

export default function CampaignDetailPage() {
  const { id } = useParams();
  const { data: campaigns, isLoading } = useCampaigns();

  if (isLoading) return <p className="p-4">Loading...</p>;

  const campaign = campaigns?.find((c: Campaign) => c.id === id);

  if (!campaign) {
    return <p className="p-4">Campaign not found</p>;
  }

  return (
    <div className="p-6 overflow-hidden flex flex-col space-y-6">
      {/* Campaign Detail Card */}
      <Card className="h-[70vh] flex flex-col">
        <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
          <h2 className="text-2xl font-bold">{campaign.name}</h2>
          <div className="flex items-center gap-3">
            <span
              className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${campaignStatusColors[campaign.status]}`}
            >
              {React.createElement(
                campaignStatusSymbols[campaign.status] || Clock,
                { className: "h-3 w-3" }
              )}
              {campaign.status}
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-gray-600">
              <Users className="w-4 h-4" /> Leads: {campaign.leads || 0}
            </span>
          </div>

          <div className="mt-4 text-gray-700">
            <p><strong>User ID:</strong> {campaign.userId}</p>
            <p><strong>ID:</strong> {campaign.id}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
