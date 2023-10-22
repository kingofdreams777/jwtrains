<script setup lang="ts">
import type { TrainSetRequest, TrainComponentRequest } from '~/models/trainrequests';
import { computed, ref } from 'vue';
import type { ITrainComponent, ITrainSet } from '~/drizzle/types';

const searchOption: Ref<string> = ref("");
const searchYear: Ref<number> = ref(0);
const searchCriteria = ref("");

const trainSetData = ref<ITrainSet[]>([]);
const trainCompData = ref<ITrainComponent[]>([]);

const isNumber = computed(() => {
    return searchOption.value == "3";
});

async function sendSetRequest(body: TrainSetRequest): Promise<ITrainSet[]> {
    return await $fetch('/api/trainsets', {
        method: 'POST',
        body: body
    });
}

async function sendComponentRequest(body: TrainComponentRequest): Promise<ITrainComponent[]> {
    return await $fetch('/api/traincomponents', {
        method: 'POST',
        body: body
    });
}

async function search() {
    switch (searchOption.value) {
        case "1":
            const compRequest: TrainComponentRequest = {
                numbers: [searchCriteria.value],
                description: undefined,
                sets: undefined,
                getSets: true
            };

            const compResponse = await sendComponentRequest(compRequest);
            trainCompData.value = compResponse;
            return compResponse;
        case "2":
            const setRequest: TrainSetRequest = {
                numbers: [searchCriteria.value],
                year: undefined,
                getComponents: true
            };

            const setResponse = await sendSetRequest(setRequest);
            trainSetData.value = setResponse;
            return setResponse;
        case "3":
            const yearRequest: TrainSetRequest = {
                numbers: undefined,
                year: searchYear.value,
                getComponents: true
            };

            const yearResponse = await sendSetRequest(yearRequest);
            trainSetData.value = yearResponse;
            return yearResponse;
        case "4":
            const descriptionRequest: TrainComponentRequest = {
                numbers: undefined,
                description: searchCriteria.value,
                sets: undefined,
                getSets: true
            };
            const descriptionResponse = await sendComponentRequest(descriptionRequest);
            trainCompData.value = descriptionResponse;
            return descriptionResponse;
        default:
            break;
    }
}
</script>

<template>
    <div class="flex flex-row">
        <select class="select w-full max-w-xs bg-white text-black border-black" v-model="searchOption" required>
            <option value="" disabled="true" selected="true">Select Search Option</option>
            <option value="1">Search Components by Number</option>
            <option value="2">Search Sets by Number</option>
            <option value="3">Search Sets by Year</option>
            <option value="4">Search Components by Description</option>
        </select>
        <input v-if="isNumber" type="number" v-model="searchYear"
            class="input w-2/12 max-w-xs bg-white text-black border-black" placeholder="Type Here" required />
        <input v-else="!isNumber" type="text" v-model="searchCriteria"
            class="input w-2/12 max-w-xs bg-white text-black border-black" placeholder="Type Here" required />
        <div>
            <button class="btn btn-primary border-black" @click="search">Search</button>
        </div>
    </div>
    <div v-if="trainCompData.values.length !== 0" v-for="component in trainCompData.values">
        <TrainComponentResult :comp="component" :pending="true" />
    </div>
    <div v-else-if="trainSetData.values.length != 0" v-for="set in trainSetData.values">
        <TrainSetResult :trainset="set" />
    </div>
    <div v-else>
        <EnterSearchPrompt />
    </div>
</template>
