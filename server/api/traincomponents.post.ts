import { eq, inArray, like } from 'drizzle-orm';
import { LibSQLDatabase } from 'drizzle-orm/libsql';
import { traincomponents } from '~/drizzle/migrations/schema';
import { ITrainComponent, TrainComponent, TrainSet } from '~/drizzle/types';
import { TrainComponentRequest, TrainSetRequest } from '~/models/trainrequests';
import * as schema from '@/drizzle/migrations/schema';
import { TrainSetResponse } from '~/models/trainresponse';

async function searchByNumber(db: LibSQLDatabase<typeof schema>, numbers: string[]) {
    const trainComponents = await db.select()
        .from(traincomponents)
        .where(inArray(traincomponents.number, numbers));

    return trainComponents as unknown as TrainComponent[];
}

async function searchByDescription(db: LibSQLDatabase<typeof schema>, description: string) {
    const trainComponents = await db.select()
        .from(traincomponents)
        .where(
            like(traincomponents.description,
                `%${description.toLowerCase()}%`));

    return trainComponents as unknown as TrainComponent[];
}

async function searchBySet(db: LibSQLDatabase<typeof schema>, sets: string[]) {
    const trainComponents = await db.select()
        .from(traincomponents)
        .where(inArray(traincomponents.set, sets));

    return trainComponents as unknown as TrainComponent[];
}

async function getSetsForComponents(sets: string[]): Promise<TrainSet[]> {
    const request: TrainSetRequest = {
        numbers: sets,
        year: undefined,
    };

    const trainsets = await $fetch('/api/trainsets', {
        method: 'POST',
        body: request
    })

    return trainsets as unknown as TrainSet[];
}

function compressTrainComponents(components: TrainComponent[]): ITrainComponent[] {
    var traincomponents: ITrainComponent[] = [];
    components.forEach(comp => {
        traincomponents.push({
        number: comp.number,
        description: comp.description,
        set: comp.set,
        sets: [],
        gauge: comp.gauge,
        image: comp.image
        });
    });

    return traincomponents;
}

function addSetsToComponent(component: ITrainComponent, sets: TrainSet[]): ITrainComponent {
    sets.forEach(set => {
        if (set.number == component.set) {
            component.sets.push();
        }
    });

    return component;
}

export default defineEventHandler(async (event) => {
    const db = await useTurso();
    const request = await readBody<TrainComponentRequest>(event);

    var trainComponents: TrainComponent[] = [];

    if (request.numbers) {
        trainComponents = await searchByNumber(db, request.numbers);
    }
    if (request.description) {
        trainComponents = await searchByDescription(db, request.description);
    }
    if (request.sets) {
        trainComponents = await searchBySet(db, request.sets);
    }


    const compressedComponents = compressTrainComponents(trainComponents);

    return trainComponents;
})
