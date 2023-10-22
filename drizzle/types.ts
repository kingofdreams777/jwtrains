export type TrainSet = {
    number: string;
    year: number;
    gauge: string;
    price: number;
    description: string;
    track: string;
    transformer: string;
};

export interface ITrainSet {
    number: string;
    year: number;
    gauge: string;
    price: number | undefined;
    description: string;
    track: string;
    transformer: string | undefined;
    components: ITrainComponent[] | undefined;
};

export type TrainComponent = {
    number: string;
    description: string;
    gauge: string;
    set: string;
    image: string;
};

export interface ITrainComponent {
    number: string;
    description: string;
    gauge: string;
    set: string;
    image: string;
    sets: ITrainSet[] | undefined;
}

export type TrainArticle = {
    number: string;
    category: string;
    description: string;
    component: string;
    lastUpdated: string;
    filename: string;
    image: string;
};


export interface ITrainArticle {
    number: string | undefined;
    category: string | undefined;
    description: string | undefined;
    component: string | undefined;
    lastUpdated: string | undefined;
    filename: string | undefined;
    image: string | undefined;
};
