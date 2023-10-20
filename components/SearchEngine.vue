<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content/dist/runtime/types';

interface TrainComponent extends ParsedContent {
    number: string;
    description: string;
    gauge: string;
    set: string;
    image: string;
}

//const data = await queryContent('/json/components').where({body: {}}).findOne();

</script>

<template>
    <div>
    </div>
</template>

<script lang="ts">
const searchOptions = [
    "Search Sets/Components by Number",
    "Search Sets by Year",
    "Search Components by Description"
]

</script>
