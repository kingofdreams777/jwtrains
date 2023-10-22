export type TrainResponse = {
    code: number,
    message: string,
    data: any
};

export type TrainSetResponse = {
    number: string,
    year: string,
    gauge: string,
    price: number,
    description: string,
    track: string,
    transformer: string,
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
