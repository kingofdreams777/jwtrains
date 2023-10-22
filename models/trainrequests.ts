import type { TrainSet } from "~/drizzle/types";

export type TrainComponentRequest = {
    number: string | undefined,
    description: string | undefined,
    sets: string[] | undefined,
    getSets: boolean
};

export type TrainSetRequest = {
    number: string | undefined,
    year: number | undefined,
    getComponents: boolean
};

export type TrainArticleRequest = {
    component: string[]
};
