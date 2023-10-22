import type { ITrainComponent } from "../drizzle/types";

export type TrainSetResponse = {
    number: string,
    year: string,
    gauge: string,
    price: string,
    description: string,
    track: string,
    transformer: string,
    components: ITrainComponent[]
}

export interface ITrainSetResponse {
    number: string,
    year: number,
    gauge: string,
    price: number,
    description: string,
    track: string,
    transformer: string,
}
