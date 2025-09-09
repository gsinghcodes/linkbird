// import { LinkedInAccounts } from "@/components/dashboard/linkedin-accounts"
// import { Campaigns } from "@/components/dashboard/campaigns"
import { LeadsTable } from "@/components/leads/LeadsTable"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AccountsTable } from "@/components/linkedinaccounts/AccountsTable"
import { Select, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CampaignsTable } from "@/components/campaigns/CampaignsTable"

export default async function DashboardPage() {
  // fetch all three datasets in parallel
  // const [accounts, campaigns, leads] = await Promise.all([...])

  return (
    <div className="flex h-full gap-4 p-4 overflow-hidden">
      {/* Left column */}
      <div className="flex flex-col gap-4 flex-1">
        <Card className="flex-1 overflow-hidden">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Campaigns</CardTitle>
            <Select>
              <SelectTrigger className="w-35">
                <SelectValue placeholder="All Campaigns" />
              </SelectTrigger>
            </Select>
          </CardHeader>
          <CardContent className="">
            <CampaignsTable />
          </CardContent>
        </Card>

        <Card className="flex-1 overflow-hidden">
          <CardHeader>
            <CardTitle>Linkedin Accounts</CardTitle>
          </CardHeader>
          <CardContent className="">
            <AccountsTable />
          </CardContent>
        </Card>
      </div>

      {/* Right column */}
      <div className="w-1/2 flex flex-col">
        <Card className="flex-1 overflow-hidden">
          <CardHeader className="flex items-center justify-between">
            <CardTitle>Recent Activity</CardTitle>
            <Select>
              <SelectTrigger className="w-31">
                <SelectValue placeholder="Most recent" />
              </SelectTrigger>
            </Select>
          </CardHeader>
          <CardContent className="">
            <LeadsTable />
          </CardContent>
        </Card>
      </div>
    </div>

  )
}
