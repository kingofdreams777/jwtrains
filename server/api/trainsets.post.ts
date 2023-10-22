import { eq, inArray } from "drizzle-orm";
import { LibSQLDatabase } from "drizzle-orm/libsql";
import { trainsets } from "~/drizzle/migrations/schema";
import { TrainSet } from "~/drizzle/types";
import { TrainSetRequest } from "~/models/trainrequests";
import { TrainSetResponse } from "~/models/trainresponse";

async function searchByNumber(db: LibSQLDatabase, setNumber: string[]): Promise<TrainSet[]> {
    const trainSet = await db.select()
        .from(trainsets)
        .where(inArray(trainsets.number, setNumber));
    return trainSet as unknown as TrainSet[];
};

async function searchByYear(db: LibSQLDatabase, year: number): Promise<TrainSet[]> {
    const trainSet = await db.select()
        .from(trainsets)
        .where(eq(trainsets.year, year));
    return trainSet as unknown as TrainSet[];
};

function compressTrainSets(trainsets: TrainSet[]): TrainSetResponse[] {
    var compSets: TrainSetResponse[] = [];

    if (trainsets.length == 0) {
        return compSets;
    };

    trainsets.forEach(trainset => {
        var foundIndex = compSets.findIndex(set => set.number == trainset.number);
        if (foundIndex == -1) {
            compSets.push({
                number: trainset.number,
                year: trainset.year.toString(),
                gauge: trainset.gauge,
                price: trainset.price.toString(),
                description: trainset.description,
                track: trainset.track,
                transformer: trainset.transformer
            });
        } else {
            compSets[foundIndex].year += `, ${trainset.year}`;
            compSets[foundIndex].price += `(${compSets[foundIndex].year}), ${trainset.price} (${trainset.year})`
        }
    });

    return compSets;
}

export default defineEventHandler(async (event) => {
    const db = useTurso();
    const request = await readBody<TrainSetRequest>(event);
    var trainSets: TrainSet[] = [];

    if (request.number) {
        trainSets = await searchByNumber(db, request.number);
    } else {
        trainSets = await searchByYear(db, request.year);
    }

    const compressedSets = compressTrainSets(trainSets);

    return compressedSets;
});
