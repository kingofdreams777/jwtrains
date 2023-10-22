import { eq, inArray } from "drizzle-orm";
import { LibSQLDatabase } from "drizzle-orm/libsql";
import { trainsets } from "~/drizzle/migrations/schema";
import { TrainSet, ITrainComponent } from "~/drizzle/types";
import { TrainComponentRequest, TrainSetRequest } from "~/models/trainrequests";
import { TrainSetResponse } from "~/models/trainresponse";
import * as schema from '@/drizzle/migrations/schema';

async function searchByNumber(db: LibSQLDatabase<typeof schema>, setNumber: string[]): Promise<TrainSet[]> {
    const trainSet = await db.select()
        .from(trainsets)
        .where(inArray(trainsets.number, setNumber));
    return trainSet as unknown as TrainSet[];
};

async function searchByYear(db: LibSQLDatabase<typeof schema>, year: number): Promise<TrainSet[]> {
    const trainSet = await db.select()
        .from(trainsets)
        .where(eq(trainsets.year, year));
    return trainSet as unknown as TrainSet[];
};

async function getComponents(setNumbers: string[]): Promise<ITrainComponent[]> {
    const request: TrainComponentRequest = {
        numbers: undefined,
        description: undefined,
        sets: setNumbers,
        getSets: false
    };

    const components = $fetch('/api/traincomponents', {
        method: 'POST',
        body: request
    })

    return components as unknown as ITrainComponent[];
}

function addComponentsToSet(set: TrainSetResponse, components: ITrainComponent[]): TrainSetResponse {
    components.forEach(component => {
        if (component.set == set.number) {
            set.components.push(component);
        }
    });

    return set;
}

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
                transformer: trainset.transformer,
                components: []
            });
        } else {
            compSets[foundIndex].year += `, ${trainset.year}`;
            compSets[foundIndex].price += `(${compSets[foundIndex].year}), ${trainset.price} (${trainset.year})`
        }
    });

    return compSets;
}


export default defineEventHandler(async (event) => {
    const db = await useTurso();
    const request = await readBody<TrainSetRequest>(event);
    var trainSets: TrainSet[] = [];

    if (request.numbers) {
        trainSets = await searchByNumber(db, request.numbers);
    } else {
        if (request.year) {
            trainSets = await searchByYear(db, request.year);
        }
    }

    if (trainSets == undefined || trainSets.length == 0) {
        return [];
    }

    const compressedSets = compressTrainSets(trainSets);

    if (request.getComponents) {
        const setNums = compressedSets.map(set => set.number);

        const components = await getComponents(setNums);

        compressedSets.forEach(set => {
            addComponentsToSet(set, components);
        });
    } else {
        compressedSets.forEach(set => {
            set.components = [];
        })
    }

    return compressedSets;
});
