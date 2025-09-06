"use client"

import {authClient} from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

function Logout() {
	const handleSignout = async () => {
		await authClient.signOut()
	}

  return (
    <Button variant="outline" onClick={handleSignout} >Logout <LogOut className="size-4" />  </Button>
  )
}

export default Logout