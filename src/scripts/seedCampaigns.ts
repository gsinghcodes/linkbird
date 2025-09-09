import { campaigns } from "../db/schema/users.ts";
import { db } from "../index.ts";

const dummyCampaigns = [
  {
    id: "cmp1",
    name: "Summer Campaign",
    status: "Active",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp2",
    name: "Fall Campaign",
    status: "Active",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp3",
    name: "Spring Campaign",
    status: "Active",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp4",
    name: "Winter Blast",
    status: "Inactive",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp5",
    name: "Holiday Deals",
    status: "Active",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp6",
    name: "Black Friday Push",
    status: "Inactive",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp7",
    name: "Cyber Monday",
    status: "Active",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp8",
    name: "Year End Clearance",
    status: "Inactive",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp9",
    name: "New Year Promo",
    status: "Active",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp10",
    name: "Valentine Special",
    status: "Inactive",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp11",
    name: "Easter Discount",
    status: "Active",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp12",
    name: "Independence Day Promo",
    status: "Inactive",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp13",
    name: "Back to School",
    status: "Active",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp14",
    name: "Festive Bonanza",
    status: "Inactive",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp15",
    name: "Monsoon Deals",
    status: "Active",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp16",
    name: "Diwali Dhamaka",
    status: "Inactive",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp17",
    name: "Christmas Carnival",
    status: "Active",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp18",
    name: "Halloween Spree",
    status: "Inactive",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp19",
    name: "Mother’s Day Special",
    status: "Active",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
  {
    id: "cmp20",
    name: "Father’s Day Promo",
    status: "Inactive",
    userId: "Nzbsosreb0FsYnZgLLRGdS3csBh4UuXI",
  },
];


async function seedCampaigns() {
    try {
        await db.insert(campaigns).values(dummyCampaigns);
        console.log("✅ Dummy campaigns inserted!");
    } catch (error) {
        console.error("❌ Error seeding data:", error);
    }
} 

seedCampaigns()