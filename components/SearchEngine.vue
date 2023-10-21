<script setup lang="ts">
import { useAsyncData } from 'nuxt/app';
import type { TrainSet } from '~/drizzle/schema';
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

function search(event) {
}

</script>

<template>
    <div>
        <select class="select w-full max-w-xs" v-model="searchOption">
            <option v-for="option in searchOptions" :key="option.id" :value="option.id">
                {{ option.description }}
            </option>
        </select>
        <input type="text" v-model="searchCriteria" class="input w-full max-w-xs" placeholder="Type Here" required />
        <p>{{ searchOption }}</p>
    </div>
</template>

<script lang="ts">

</script>

