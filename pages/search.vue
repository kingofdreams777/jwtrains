<script setup lang="ts">
import type { ITrainArticle, ITrainComponent, ITrainSet } from '~/drizzle/types';

const testTrainSet1: ITrainSet = {
    number: '1105',
    year: 1959,
    gauge: '0-27',
    price: 0,
    description: 'Freight',
    track: '8 c, 2 s',
    transformer: '1026'
}

const testTrainSet2: ITrainSet = {
    number: '1107',
    year: 1960,
    gauge: '0-27',
    price: 0,
    description: 'Freight',
    track: '8 c, 2 s',
    transformer: '1026'
}

const testArticle: ITrainArticle = {
    number: 'L1055',
    category: 'locomotives',
    description: '1055 Texas Special Alco',
    component: '',
    lastUpdated: '',
    filename: '',
    image: ''
}

const sets: ITrainSet[] = [testTrainSet1, testTrainSet2];

const testComponent: ITrainComponent = {
    number: "1055",
    description: "locomotive, diesel, A unit, Texas Special Alco, powered",
    gauge: "0-27",
    set: "1105",
    image: "1055_web.jpg",
    sets: sets,
};

</script>

<template>
    <div class="flex flex-col place-items-center bg-base-200">
        <div class="prose">
            <h1>JWTrains Search Engine</h1>
        </div>
        <NuxtImg src="/searchbanner.jpg" class="h-full w-full rounded-lg shadow-2xl py-1" />
    </div>
    <div>
        <SearchEngine />
    </div>
    <div>
        <TrainComponentResult :comp="testComponent" :article="testArticle" />
    </div>
</template>
