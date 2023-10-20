import {
    sqliteTable,
    text,
    real,
    integer,
    index
} from 'drizzle-orm/sqlite-core'

export const traincomponents = sqliteTable('traincomponents',
    {
        number: text('number'),
        description: text('description'),
        gauge: text('gauge'),
        set: text('set'),
        image: text('image'),
    },
    (traincomponents) => ({
        numberIdx: index("number_idx").on(traincomponents.number),
    })
);

export const trainsets = sqliteTable('trainsets',
    {
        number: text('number'),
        year: integer('year'),
        gauge: text('gauge'),
        price: real('price'),
        description: text('description'),
        track: text('track'),
        transformer: text('transformer'),
    },
    (trainsets) => ({
        numberIdx: index("number_idx").on(trainsets.number),
        yearIdx: index("year_idx").on(trainsets.year),
    })
);

export const trainarticles = sqliteTable('trainarticles',
    {
        number: text('number'),
        category: text('category'),
        description: text('description'),
        component: text('component'),
        last_updated: text('last_updated'),
        filename: text('filename'),
        image: text('image'),
    },
    (trainarticles) => ({
        numberIdx: index("number_idx").on(trainarticles.number),
        componentIdx: index("component_idx").on(trainarticles.component),
    })
);

export type TrainComponent = typeof traincomponents.$inferSelect
export type TrainSet = typeof trainsets.$inferSelect
export type TrainArticle = typeof trainarticles.$inferSelect
