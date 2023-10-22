<script setup lang="ts">
import type { TrainSetRequest, TrainComponentRequest } from '~/models/trainrequests';
import { computed, ref } from 'vue';
import type { ITrainComponent, ITrainSet } from '~/drizzle/types';

const searchOption: Ref<string> = ref("");
const searchYear: Ref<number> = ref(0);
const searchCriteria = ref("");

const trainSetData = ref<ITrainSet[]>([]);
const isTrainSetData = ref(false);
const trainCompData = ref<ITrainComponent[]>([]);
const isTrainCompData = ref(false);

function toggleIsTrainCompData() {
    isTrainCompData.value = !isTrainCompData.value;
}

function refresh() {
    isTrainCompData.value = false;
    isTrainSetData.value = false;
}

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
    refresh();
    switch (searchOption.value) {
        case "1":
            const compRequest: TrainComponentRequest = {
                numbers: [searchCriteria.value],
                description: undefined,
                sets: undefined,
            };

            const compResponse = await sendComponentRequest(compRequest);
            trainCompData.value = compResponse;
            isTrainCompData.value = true;
            return compResponse;
        case "2":
            const setRequest: TrainSetRequest = {
                numbers: [searchCriteria.value],
                year: undefined,
            };

            const setResponse = await sendSetRequest(setRequest);
            trainSetData.value = setResponse;
            isTrainSetData.value = true;
            return setResponse;
        case "3":
            const yearRequest: TrainSetRequest = {
                numbers: undefined,
                year: searchYear.value,
            };

            const yearResponse = await sendSetRequest(yearRequest);
            trainSetData.value = yearResponse;
            isTrainSetData.value = true;
            return yearResponse;
        case "4":
            const descriptionRequest: TrainComponentRequest = {
                numbers: undefined,
                description: searchCriteria.value,
                sets: undefined,
            };
            const descriptionResponse = await sendComponentRequest(descriptionRequest);
            trainCompData.value = descriptionResponse;
            isTrainCompData.value = true;
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
    <div v-if="isTrainCompData">
        <div class="prose">
            <h2>Number of Components Found: {{ trainCompData.length }}</h2>
        </div>
        <div v-for="component in trainCompData">
            <TrainComponentResult :comp="component" />
        </div>
    </div>
    <div v-else-if="isTrainSetData">
        <div class="prose">
            <h2>Number of Sets Found: {{ trainSetData.length }}</h2>
        </div>
        <div v-for="set in trainSetData">
            <TrainSetResult :trainset="set" />
        </div>
    </div>
    <div v-else>
        <EnterSearchPrompt />
    </div>
</template>
