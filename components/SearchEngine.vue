<script setup lang="ts">
import { useAsyncData } from 'nuxt/app';
import type { TrainSetRequest, TrainComponentRequest } from '~/models/trainrequests';
import { computed, ref } from 'vue';

const searchOption: Ref<number> = ref(0);
const searchYear: Ref<number> = ref(0);
const searchCriteria = ref("");

const isNumber = computed(() => {
    return searchOption.value == 2;
});


async function sendSetRequest(body: string) {
    return await $fetch('/api/trainsets', {
        method: 'POST',
        body: body
    });
}

async function sendComponentRequest(body: string) {
    return await $fetch('/api/traincomponents', {
        method: 'POST',
        body: body
    });
}

async function search() {
    return await useAsyncData('/api/trainsets', () => {
        if (isNumber.value) {
            const request: TrainSetRequest = {
                number: undefined,
                year: searchYear.value
            };

            console.log("Request is: " + JSON.stringify(request));

            const response = sendSetRequest(JSON.stringify(request));

            return response;
        } else {
            const request: TrainComponentRequest = {
                number: searchCriteria.value,
                description: undefined,
                sets: undefined
            };

            const response = sendSetRequest(JSON.stringify(request));

            return response;
        }
    })
}
</script>

<template>
    <div class="flex flex-row">
        <select class="select w-full max-w-xs bg-white text-black border-black" v-model="searchOption" required>
            <option value="" disabled="true" selected="true">Select Search Option</option>
            <option value="1">Search Sets/Components by Number</option>
            <option value="2">Search Sets by Year</option>
            <option value="3">Search Components by Description</option>
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
