import { NodePgDatabase } from "drizzle-orm/node-postgres";
import * as schema from "../schemas";

export type Postgres = NodePgDatabase<typeof schema>;
