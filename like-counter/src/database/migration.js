import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";
import pkg from "pg";
const { Client } = pkg;

const shards = [
  process.env.DATABASE_SHARD_USA_URL,
  process.env.DATABASE_SHARD_ASIA_URL,
  process.env.DATABASE_SHARD_EU_URL,
];

async function migrateShards() {
  for (const shard of shards) {
    const client = new Client({ connectionString: shard });
    await migrate(drizzle({ client }), {
      migrationsFolder: "src/database/migrations",
    });
  }
}

migrateShards();
