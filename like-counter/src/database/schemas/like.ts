import { pgTable } from "drizzle-orm/pg-core";

export const likeSchema = pgTable("likes", (table) => ({
  id: table.uuid("id").primaryKey().defaultRandom(),
  count: table.bigint("count", { mode: "number" }).notNull().default(0),
}));
