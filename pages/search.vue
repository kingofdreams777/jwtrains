<script setup lang="ts">
import type { ITrainComponent } from '~/drizzle/types';

const testComponent: ITrainComponent = {
    number: "1055",
    description: "locomotive, diesel, A unit, Texas Special Alco, powered",
    gauge: "0-27",
    set: "1105",
    image: "1055_web.jpg",
}
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
        <TrainComponentResult :comp="testComponent" />
    </div>
</template>
