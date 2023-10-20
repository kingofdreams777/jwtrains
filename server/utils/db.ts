import { drizzle, BetterSQLite3Database } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';

export function useDb(): BetterSQLite3Database {
    const sqlite = new Database("./jwtrains.db");
    const db = drizzle(sqlite);
    return db;
}
