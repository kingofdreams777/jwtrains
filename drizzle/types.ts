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
    price: number;
    description: string;
    track: string;
    transformer: string;
}

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
    number: string;
    category: string;
    description: string;
    component: string;
    lastUpdated: string;
    filename: string;
    image: string;
};
