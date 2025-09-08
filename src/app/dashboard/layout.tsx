import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"
import { AppSidebar } from "@/components/app-sidebar"
import { Separator } from "@/components/ui/separator"
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
    <SidebarProvider>
      <AppSidebar user={user} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <DashboardBreadcrumb /> {/* 👈 now dynamic */}
          </div>
        </header>
        <UserProvider initialUser={user}>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
            {children} {/* 👈 children pages will render here */}
          </div>
        </UserProvider>
      </SidebarInset>
    </SidebarProvider>
  )
}
