import { trainsets } from "~/drizzle/schema";

export default defineEventHandler(async () => {
    const db: BunSQLiteDatabase = useDb();
    const response = await db.select().from(trainsets);
    return response;
})
