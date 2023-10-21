import { eq } from "drizzle-orm";
import { LibSQLDatabase } from "drizzle-orm/libsql";
import { trainsets } from "~/drizzle/migrations/schema";
import { TrainSet } from "~/drizzle/types";
import { TrainSetRequest } from "~/models/trainrequests";

async function searchByNumber(db: LibSQLDatabase, setNumber: string): Promise<TrainSet[]> {
    const trainSet = await db.select()
        .from(trainsets)
        .where(eq(trainsets.number, setNumber));
    if (trainSet) {
        return trainSet as unknown as TrainSet[];
    }
    throw new Error(`Train set ${setNumber} not found`);
};

async function searchByYear(db: LibSQLDatabase, year: number): Promise<TrainSet[]> {
    const trainSet = await db.select()
        .from(trainsets)
        .where(eq(trainsets.year, year));
    if (trainSet) {
        return trainSet as unknown as TrainSet[];
    }
    throw new Error(`Train set ${year} not found`);
};

export default defineEventHandler(async (event) => {
    const db = useTurso();
    const request = await readBody<TrainSetRequest>(event);
    var trainSet: TrainSet[] = [];

    if (request.number) {
        trainSet = await searchByNumber(db, request.number);
    } else {
        trainSet = await searchByYear(db, request.year);
    }

    return trainSet;
});
