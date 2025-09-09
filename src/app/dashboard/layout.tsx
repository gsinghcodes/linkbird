import { redirect } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
import "@/app/globals.css"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { getServerSession } from "@/lib/get-session"
import { DashboardBreadcrumb } from "@/components/DashboardBreadcrumb" // 👈 import here
import { UserProvider } from "@/context/UserContext"

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession()
  const user = session?.user

  if (!user) {
    redirect("/login")
  }

  return (
      <SidebarProvider className="bg-slate-100 h-screen" >
        <AppSidebar user={user} />
        <SidebarInset className="flex bg-slate-100 h-full flex-col">
          <header className="flex items-center gap-4 px-4 pt-2">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 data-[orientation=vertical]:h-4" />
            <DashboardBreadcrumb />
          </header>

          <main className="flex-1 overflow-auto p-3">
            <UserProvider initialUser={user}>
              {children}
            </UserProvider>
          </main>
        </SidebarInset>
      </SidebarProvider >
  )
}
