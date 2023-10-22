import type { TrainSet } from "~/drizzle/types";

export type TrainComponentRequest = {
    number: string | undefined,
    description: string | undefined,
    sets: string[] | undefined,
};

export type TrainSetRequest = {
    number: string | undefined,
    year: number | undefined
};

export type TrainArticleRequest = {
    component: string[]
};
