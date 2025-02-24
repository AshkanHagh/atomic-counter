import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "src/database/schemas",
  out: "src/database/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: "",
  },
  verbose: true,
  casing: "snake_case",
  strict: true,
});
