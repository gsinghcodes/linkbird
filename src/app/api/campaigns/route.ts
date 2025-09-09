import { db } from "@/index";
import { campaigns } from "@/db/schema/users";
import { getServerSession } from "@/lib/get-session";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const session = await getServerSession();
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userLeads = await db.select().from(campaigns);

  return NextResponse.json(userLeads);
}
