import { eq, inArray, like } from 'drizzle-orm';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import { traincomponents } from '~/drizzle/migrations/schema';
import { TrainComponent, TrainSet } from '~/drizzle/types';
import { TrainComponentRequest } from '~/models/trainrequests';

async function searchByNumber(db: LibSQLDatabase, number: string) {
    const trainComponents = await db.select()
        .from(traincomponents)
        .where(eq(traincomponents.number, number));

    return trainComponents as unknown as TrainComponent[];
}

async function searchByDescription(db: LibSQLDatabase, description: string) {
    const trainComponents = await db.select()
        .from(traincomponents)
        .where(
            like(traincomponents.description,
                `%${description.toLowerCase()}%`));

    return trainComponents as unknown as TrainComponent[];
}

async function searchBySet(db: LibSQLDatabase, sets: TrainSet[]) {
    const trainComponents = await db.select()
        .from(traincomponents)
        .where(inArray(traincomponents.set, sets.map(set => set.number)));

    return trainComponents as unknown as TrainComponent[];
}

export default defineEventHandler(async (event) => {
    const db = useTurso();
    const request = await readBody<TrainComponentRequest>(event);

    var trainComponents: TrainComponent[] = [];

    if (request.number) {
        trainComponents = await searchByNumber(db, request.number);
    }
    if (request.description) {
        trainComponents = await searchByDescription(db, request.description);
    }
})
