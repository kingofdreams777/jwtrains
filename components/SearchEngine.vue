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

const searchOption = ref("");
const searchCriteria = ref("");

const data = await useAsyncData('/api/trainsets', () => {
});

async function searchSets() {

}

async function search(e) {
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
        <input type="text" v-model="searchCriteria" class="input w-2/12 max-w-xs bg-white text-black border-black"
            placeholder="Type Here" required />
        <div>
            <button class="btn btn-primary border-black" @click="search">Search</button>
        </div>
    </div>
</template>

<script lang="ts">
</script>

