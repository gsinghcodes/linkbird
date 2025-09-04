import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';
// import { eq } from 'drizzle-orm';
// import { usersTable } from './db/schema/users';
  
export const db = drizzle(process.env.DATABASE_URL!);

// async function main() {
//   const user: typeof usersTable.$inferInsert = {
//     id: 1,
//     firstName: 'G',
//     lastName: 'Singh',
//     email: 'gsingh@gmail.com',
//     password: '123456'
//   };

//   await db.insert(usersTable).values(user);
//   console.log('New user created!')

//   const users = await db.select().from(usersTable);
//   console.log('Getting all users from the database: ', users)
//   /*
//   const users: {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//   }[]
//   */

//   await db
//     .update(usersTable)
//     .set({
//       id: 31,
//     })
//     .where(eq(usersTable.email, user.email));
//   console.log('User info updated!')

//   await db.delete(usersTable).where(eq(usersTable.email, user.email));
//   console.log('User deleted!')
// }

// main();
