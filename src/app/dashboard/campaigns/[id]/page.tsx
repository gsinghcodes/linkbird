"use client";

import { useParams } from "next/navigation";
import { useCampaigns } from "@/hooks/useCampaigns";
import { useLeads } from "@/hooks/useLeads";
import { Campaign } from "@/components/campaigns/CampaignsTable";
import { Lead } from "@/stores/leadStore";
import React from "react";
import { Tabs, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Overview from "@/components/campaigns/Overview";
import Leads from "@/components/campaigns/Leads";
import Sequence from "@/components/campaigns/Sequence";
import SettingsComponent from "@/components/campaigns/Settings";

export default function CampaignDetailPage() {
  const { data: campaigns, isLoading: isCampaignsLoading } = useCampaigns();
  const { data: leads, isLoading: isLeadsLoading } = useLeads();
  const { id } = useParams();
  const [component, setComponent] = React.useState("overview");
  const [concernedLeads, setConcernedLeads] = React.useState<Lead[]>([]);
  const [stats, setStats] = React.useState({
    total: 0,
    requested: 0,
    contacted: 0,
    responded: 0,
    converted: 0,
  });

  const campaign = campaigns?.find((c: Campaign) => c.id === id);

  // Helper: compute stats once leads + campaign are available
  const getLeadStats = (campaignName: string) => {
    const s = {
      total: 0,
      requested: 0,
      contacted: 0,
      responded: 0,
      converted: 0,
    };

    for (const lead of leads || []) {
      if (lead.campaignName !== campaignName) continue;

      s.total++;

      if (["Pending", "Contacted", "Responded", "Converted"].includes(lead.status)) {
        s.requested++;
      }
      if (["Contacted", "Responded", "Converted"].includes(lead.status)) {
        s.contacted++;
      }
      if (["Responded", "Converted"].includes(lead.status)) {
        s.responded++;
      }
      if (lead.status === "Converted") {
        s.converted++;
      }
    }

    return s;
  };

  // Update concerned leads + stats when data is ready
  React.useEffect(() => {
    if (!leads || !campaign) return;

    const filteredLeads = leads.filter(
      (lead: Lead) => lead.campaignName === campaign.name
    );
    setConcernedLeads(filteredLeads);

    setStats(getLeadStats(campaign.name));
  }, [leads, campaign, id]);

  const date = campaign?.createdAt.split("T")[0];

  // // 🚨 Option 1: Show loading state until both queries finish
  // if (isCampaignsLoading || isLeadsLoading) {
  //   return <div className="p-6">Loading campaign details...</div>;
  // }

  return (
    <div className="p-6 overflow-hidden flex flex-col space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Campaigns</h1>
        <p className="text-sm text-gray-500 mt-1">
          Manage your campaigns and track their performance.
        </p>
      </div>

      <div>
        <Tabs defaultValue="overview" onValueChange={setComponent}>
          <TabsList className="flex gap-4 text-sm">
            <TabsTrigger
              className={
                component === "overview"
                  ? "flex items-center gap-2 py-1 text-purple-400 px-2 shadow-lg rounded-md cursor-pointer"
                  : "flex items-center gap-2 px-2 rounded-md cursor-pointer"
              }
              value="overview"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              className={
                component === "leads"
                  ? "flex items-center gap-2 py-1 text-purple-400 px-2 shadow-lg rounded-md cursor-pointer"
                  : "flex items-center gap-2 px-2 rounded-md cursor-pointer"
              }
              value="leads"
            >
              Leads
            </TabsTrigger>
            <TabsTrigger
              className={
                component === "sequence"
                  ? "flex items-center gap-2 py-1 text-purple-400 px-2 shadow-lg rounded-md cursor-pointer"
                  : "flex items-center gap-2 px-2 rounded-md cursor-pointer"
              }
              value="sequence"
            >
              Sequence
            </TabsTrigger>
            <TabsTrigger
              className={
                component === "settings"
                  ? "flex items-center gap-2 py-1 text-purple-400 px-2 shadow-lg rounded-md cursor-pointer"
                  : "flex items-center gap-2 px-2 rounded-md cursor-pointer"
              }
              value="settings"
            >
              Settings
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div>
        {component === "overview" && campaign && (
          <Overview
            campaignName={campaign.name}
            campaignStatus={campaign.status}
            campaignDate={date}
            leadCount={stats.total}
            requestedCount={stats.requested}
            acceptedRate={stats.contacted}
            respondedCount={stats.responded}
            conversionCount={stats.converted}
          />
        )}
        {component === "leads" && <Leads leads={concernedLeads} />}
        {component === "sequence" && <Sequence />}
        {component === "settings" && (
          <SettingsComponent campaignName={campaign?.name} />
        )}
      </div>
    </div>
  );
}
