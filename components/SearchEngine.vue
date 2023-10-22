<script setup lang="ts">
import { useAsyncData } from 'nuxt/app';
import type { TrainSetRequest, TrainComponentRequest } from '~/models/trainrequests';
import { computed, ref } from 'vue';

const searchOption: Ref<number> = ref(0);
const searchYear: Ref<number> = ref(0);
const searchCriteria = ref("");

const isNumber = computed(() => {
    return searchOption.value == 3;
});


async function sendSetRequest(body: TrainSetRequest) {
    return await $fetch('/api/trainsets', {
        method: 'POST',
        body: body
    });
}

async function sendComponentRequest(body: TrainComponentRequest) {
    return await $fetch('/api/traincomponents', {
        method: 'POST',
        body: body
    });
}

async function search() {
    switch (searchOption.value) {
        case 1:
            const setRequest: TrainSetRequest = {
                number: searchCriteria.value,
                year: undefined
            };

            const setResponse = await sendSetRequest(setRequest);
            return setResponse;
        case 2:
            const yearRequest: TrainSetRequest = {
                number: undefined,
                year: searchYear.value
            };

            const yearResponse = await sendSetRequest(yearRequest);
            return yearResponse;
        case 3:
            const descriptionRequest: TrainComponentRequest = {
                number: undefined,
                description: searchCriteria.value,
                sets: undefined
            };
            const descriptionResponse = await sendComponentRequest(descriptionRequest);
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
</template>
