"use client";

import { useParams } from "next/navigation";
import { useCampaigns } from "@/hooks/useCampaigns";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, File, Settings, Settings2, Users, Users2, Waypoints } from "lucide-react";
import { Campaign, campaignStatusColors, campaignStatusSymbols } from "@/components/campaigns/CampaignsTable";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Overview from "@/components/campaigns/Overview";
import { useLeads } from "@/hooks/useLeads";
import { Lead } from "@/stores/leadStore";
import Leads from "@/components/campaigns/Leads";
import SettingsComponent from "@/components/campaigns/Settings";
import Sequence from "@/components/campaigns/Sequence"

export default function CampaignDetailPage() {
  const { data: campaigns, isLoading: isCampaignsLoading } = useCampaigns();
  const { data: leads, isLoading: isLeadsLoading } = useLeads();
  const { id } = useParams();
  const [component, setComponent] = React.useState("overview");
  const [concernedLeads, setConcernedLeads] = React.useState([]);

  const campaign = campaigns?.find((c: Campaign) => c.id === id);

  React.useEffect(() => {
    if (!leads || !campaign) return;
    const filteredLeads = leads.filter((lead: Lead) => lead.campaignName === campaign.name);
    setConcernedLeads(filteredLeads);
  }, [leads, campaign, id]);


  const getLeadStats = (campaignName: string) => {
    const stats = {
      total: 0,
      requested: 0,
      contacted: 0,
      responded: 0,
      converted: 0,
    };

    for (const lead of leads || []) {
      if (lead.campaignName !== campaignName) continue;

      stats.total++;

      if (["Pending", "Contacted", "Responded", "Converted"].includes(lead.status)) {
        stats.requested++;
      }
      if (["Contacted", "Responded", "Converted"].includes(lead.status)) {
        stats.contacted++;
      }
      if (["Responded", "Converted"].includes(lead.status)) {
        stats.responded++;
      }
      if (lead.status === "Converted") {
        stats.converted++;
      }
    }

    return stats;
  };


  const { total, requested, contacted, responded, converted } = getLeadStats(campaign?.name || "");

  const date = campaign?.createdAt.split("T")[0]

  return (

    <div className="p-6 overflow-hidden flex flex-col space-y-6">

      <div>
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your campaigns and track their performance.
        </p>
      </div>
      <div>
        <Tabs defaultValue="overview" className="" onValueChange={setComponent}>
          <TabsList className="flex gap-4 text-sm">
            <TabsTrigger className={component === "overview" ? ` flex items-center gap-2 py-1 text-purple-400 px-2 shadow-lg rounded-md cursor-pointer` : ` flex items-center gap-2  px-2 rounded-md cursor-pointer`} value="overview"><File />Overview</TabsTrigger>
            <TabsTrigger className={component === "leads" ? ` flex items-center gap-2 py-1 text-purple-400 px-2 shadow-lg rounded-md cursor-pointer` : ` flex items-center gap-2  px-2 rounded-md cursor-pointer`} value="leads"><Users2 />Leads</TabsTrigger>
            <TabsTrigger className={component === "sequence" ? ` flex items-center gap-2 py-1 text-purple-400 px-2 shadow-lg rounded-md cursor-pointer` : ` flex items-center gap-2  px-2 rounded-md cursor-pointer`} value="sequence"><Waypoints />Sequence</TabsTrigger>
            <TabsTrigger className={component === "settings" ? ` flex items-center gap-2 py-1 text-purple-400 px-2 shadow-lg rounded-md cursor-pointer` : ` flex items-center gap-2  px-2 rounded-md cursor-pointer`} value="settings"><Settings />Settings</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      <div>
        {component === "overview" && <Overview
          campaignName={campaign?.name}
          campaignStatus={campaign?.status}
          campaignDate={date}
          leadCount={total}
          requestedCount={requested}
          acceptedRate={contacted}
          respondedCount={responded}
          conversionCount={converted}
        />
        }
        {component === "leads" && <Leads leads={concernedLeads} />}
        {component === "sequence" && <Sequence />}
        {component === "settings" && <SettingsComponent campaignName={campaign?.name}  />}
      </div>
    </div>
  );
}
