import { pgTable, integer, varchar } from "drizzle-orm/pg-core"

export const usersTable = pgTable('users', {
  id: integer().primaryKey(),
  firstName: varchar("first_name").notNull(),
  lastName: varchar("last_name"),
  email: varchar().notNull(),
  password: varchar().notNull()
});
