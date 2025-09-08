// import { LinkedInAccounts } from "@/components/dashboard/linkedin-accounts"
// import { Campaigns } from "@/components/dashboard/campaigns"
import { LeadsTable } from "@/components/leads/LeadsTable"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AccountsTable } from "@/components/linkedinaccounts/AccountsTable"

export default async function DashboardPage() {
  // fetch all three datasets in parallel
  // const [accounts, campaigns, leads] = await Promise.all([...])

  return (
    <div className="flex gap-4">
      <div className="flex min-w-1/2 flex-col gap-4">
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <LeadsTable />
            </CardContent>
          </Card>
        </div>
        <div className="">
          <Card>
            <CardHeader>
              <CardTitle>Linkedin Accounts</CardTitle>
            </CardHeader>
            <CardContent className="h-60 overflow-auto">
              <AccountsTable />
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="min-w-1/2 min-h-full">
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>

          </CardHeader>
          <CardContent>
            <LeadsTable />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
