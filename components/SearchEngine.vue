<script setup lang="ts">
import { useAsyncData } from 'nuxt/app';
import type { TrainSet } from '~/drizzle/schema';
import type { TrainSetRequest, TrainComponentRequest } from '~/models/trainrequests';
import { vModelSelect } from 'vue';
import { computed, ref } from 'vue';

type SearchOption = {
    id: number;
    description: string;
};

const searchOptions: SearchOption[] = [
    { id: 1, description: "Search Sets/Components Number" },
    { id: 2, description: "Search Sets by Year" },
    { id: 3, description: "Search Components by Description" }
]

const searchOption: Ref<number> = ref(0);
const searchYear: Ref<number> = ref(0);
const searchCriteria = ref("");

const isNumber = computed(() => {
    return searchOption.value == 2;
});


async function sendRequest(body: string) {
    console.log("Sending request");
    return await $fetch('/api/trainsets', {
        method: 'POST',
        body: body
    });
}

async function search() {
    console.log("Search option is: " + searchOption.value);
    console.log("Search criteria is: " + searchCriteria.value);
    console.log("Search year is: " + searchYear.value);
    console.log("Is number: " + isNumber.value);
    return await useAsyncData('/api/trainsets', () => {
        console.log("Search option is: " + searchOption.value);

        if (isNumber.value) {
            const request: TrainSetRequest = {
                number: undefined,
                year: searchYear.value
            };

            console.log("Request is: " + JSON.stringify(request));

            const response = sendRequest(JSON.stringify(request));

            return response;
        } else {
            const request: TrainComponentRequest = {
                number: searchCriteria.value,
                description: undefined
            };

            console.log("Request is: " + JSON.stringify(request));

            const response = sendRequest(JSON.stringify(request));

            return response;
        }
    })
}

</script>

<template>
    <div class="flex flex-row">
        <select class="select w-full max-w-xs bg-white text-black border-black" v-model="searchOption">
            <option value="" disabled selected>Select Search Option</option>
            <option value="1" selected>Search Sets/Components by Number</option>
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

<script lang="ts">
</script>

