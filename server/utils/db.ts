import { drizzle, BunSQLiteDatabase } from 'drizzle-orm/bun-sqlite';
import { Database } from 'bun:sqlite';
import {
    traincomponents,
    trainsets,
    trainarticles,
    TrainSet,
    TrainArticle,
    TrainComponent
} from '~/drizzle/schema';

const config = useRuntimeConfig();

const sqlite = new Database(config.dbUrl);

const db: BunSQLiteDatabase = drizzle(sqlite);

const result = await db.select().from(traincomponents);

console.log(result);
