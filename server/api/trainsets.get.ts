import { trainsets } from "~/drizzle/migrations/schema";
import { TrainSet } from "~/drizzle/types";

export default defineEventHandler(async () => {
    const db = useTurso();
    const response = await db.select().from(trainsets).limit(10);
    return response as unknown as TrainSet[];
})
