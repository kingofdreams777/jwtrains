import type { TrainSet } from "~/drizzle/types";

export type TrainComponentRequest = {
    numbers: string[] | undefined,
    description: string | undefined,
    sets: string[] | undefined,
};

export type TrainSetRequest = {
    numbers: string[] | undefined,
    year: number | undefined,
};

export type TrainArticleRequest = {
    component: string[]
};
