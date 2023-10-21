import { eq } from "drizzle-orm";
import { TrainSet, trainsets } from "~/drizzle/schema";
import { TrainSetRequest } from "~/models/trainrequests";

async function searchByNumber(db, setNumber: string): Promise<TrainSet[]> {
    const trainSet = await db.select()
        .from(trainsets)
        .where(eq(trainsets.number, setNumber));
    if (trainSet) {
        return trainSet as unknown as TrainSet[];
    }
    throw new Error(`Train set ${setNumber} not found`);
};

async function searchByYear(db, year: string): Promise<TrainSet[]> {
    const trainSet = await db.select()
        .from(trainsets)
        .where(eq(trainsets.number, year));
    if (trainSet) {
        return trainSet as unknown as TrainSet[];
    }
    throw new Error(`Train set ${year} not found`);
};

export default defineEventHandler(async (event: TrainSetRequest) => {
    const db = useTurso();
    var trainSet: TrainSet[] = [];

    if (event.number) {
        trainSet = await searchByNumber(db, event.number);
    }
});
