import { betterAuth } from "better-auth";
import { schema } from '@/db/schema/users'
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@/index"; // your drizzle instance

export const auth = betterAuth({
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: drizzleAdapter(db, {
    provider: "pg",// or "mysql", "sqlite"
    schema
  }),
  emailAndPassword: {
    enabled: true,
  },
  
});