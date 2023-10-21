import { drizzle } from "drizzle-orm/libsql";
import * as schema from "~/drizzle/migrations/schema";
import { createClient } from "@libsql/client";

export function useTurso() {
    const config = useRuntimeConfig().turso;
    const client = createClient({
        url: config.dbUrl,
        authToken: config.dbAuthToken
    });

    return drizzle(client, { schema });
}
