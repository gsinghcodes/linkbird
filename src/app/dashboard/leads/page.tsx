
import { db } from '@/index';
import { leads } from "@/db/schema/users"

export default async function Page() {
    const result = await db.select().from(leads);// Example with Prisma

    return (
        <ul>
            {result.map((lead) => (
                <li key={lead.id}>{lead.name}</li>
            ))}
        </ul>
    );
}
