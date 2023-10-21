import { TrainSet, trainsets } from "~/drizzle/schema";

export default defineEventHandler(async () => {
    const db = useTurso();
    const response = await db.select().from(trainsets).limit(10);
    return response as unknown as TrainSet[];
})
