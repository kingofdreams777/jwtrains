import type { Config } from "drizzle-kit";

export default {
    schema: "./drizzle/schema.ts",
    driver: "better-sqlite",
    dbCredentials: {
        url: "./drizzle/jwtrains.db",
    },
} satisfies Config;
