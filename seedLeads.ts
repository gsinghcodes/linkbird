import { db } from "./src/index.ts"; // your Drizzle client
import { leads } from "./src/db/schema/users.ts";

const dummyLeads = [
  {
    name: "John Doe",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
    email: "john.doe@example.com",
    company: "Acme Corp",
    campaignName: "Summer Campaign",
    status: "Pending",
    lastContactDate: new Date("2025-09-01").toISOString(),
    phone: "+1 555 123 4567",
    notes: "Interested in product X, follow up next week",
  },
  {
    name: "Jane Smith",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
    email: "jane.smith@example.com",
    company: "Beta Ltd",
    campaignName: "Fall Campaign",
    status: "Contacted",
    lastContactDate: new Date("2025-09-02").toISOString(),
    phone: "+1 555 987 6543",
    notes: "Requested demo, send follow-up email",
  },
  {
    name: "Michael Johnson",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
    email: "michael.johnson@example.com",
    company: "Gamma Inc",
    campaignName: "Summer Campaign",
    status: "Responded",
    lastContactDate: new Date("2025-09-03").toISOString(),
    phone: "+1 555 111 2222",
    notes: "Positive response, schedule meeting",
  },
  {
    name: "Emily Davis",
    userId: "sdfsf",
    email: "emily.davis@example.com",
    company: "Delta Solutions",
    campaignName: "Spring Campaign",
    status: "Converted",
    lastContactDate: new Date("2025-09-05").toISOString(),
    phone: "+1 555 333 4444",
    notes: "Closed deal, send welcome pack",
  },
  {
    name: "Robert Wilson",
    userId: "suidhfsf",
    email: "robert.wilson@example.com",
    company: "Epsilon Co",
    campaignName: "Fall Campaign",
    status: "Pending",
    lastContactDate: new Date("2025-09-06").toISOString(),
    phone: "+1 555 555 6666",
    notes: "Follow up in two weeks",
  },
];

async function seedLeads() {
  for (const lead of dummyLeads) {
    await db.insert(leads).values(lead);
  }
  console.log("Dummy leads inserted!");
}

seedLeads().catch(console.error);
