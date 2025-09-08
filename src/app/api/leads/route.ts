import { db } from "@/index";
import { leads } from "@/db/schema/users";
import { getServerSession } from "@/lib/get-session";
import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET(req: Request) {
  const session = await getServerSession();
  const userId = session?.user?.id;

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const userLeads = await db.select().from(leads).where(eq(leads.userId, userId));

  return NextResponse.json(userLeads);
}
