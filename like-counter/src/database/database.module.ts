import { Module } from "@nestjs/common";
import {
  DATABASE_SHARD_ASIA,
  DATABASE_SHARD_EU,
  DATABASE_SHARD_USA,
} from "./constant";
import { ConfigService } from "@nestjs/config";
import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schemas";

@Module({
  providers: [
    {
      provide: DATABASE_SHARD_USA,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const url = config.get<string>("DATABASE_SHARD_USA_URL");

        const pool = new Pool({
          connectionString: url,
          min: 10,
          max: 100,
          connectionTimeoutMillis: 1000 * 8,
          idleTimeoutMillis: 1000 * 8,
          maxLifetimeSeconds: 8,
        });

        return drizzle({
          client: pool,
          schema: schema,
          casing: "snake_case",
        });
      },
    },

    {
      provide: DATABASE_SHARD_EU,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const url = config.get<string>("DATABASE_SHARD_EU_URL");

        const pool = new Pool({
          connectionString: url,
          min: 10,
          max: 100,
          connectionTimeoutMillis: 1000 * 8,
          idleTimeoutMillis: 1000 * 8,
          maxLifetimeSeconds: 8,
        });

        return drizzle({
          client: pool,
          schema: schema,
          casing: "snake_case",
        });
      },
    },

    {
      provide: DATABASE_SHARD_ASIA,
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const url = config.get<string>("DATABASE_SHARD_ASIA_URL");

        const pool = new Pool({
          connectionString: url,
          min: 10,
          max: 100,
          connectionTimeoutMillis: 1000 * 8,
          idleTimeoutMillis: 1000 * 8,
          maxLifetimeSeconds: 8,
        });

        return drizzle({
          client: pool,
          schema: schema,
          casing: "snake_case",
        });
      },
    },
  ],

  exports: [DATABASE_SHARD_EU, DATABASE_SHARD_USA, DATABASE_SHARD_ASIA],
})
export class DatabaseModule {}
