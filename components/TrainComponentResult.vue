<script setup lang="ts">
import type { ITrainComponent } from '~/drizzle/types';
const props = defineProps({
    comp: {
        type: Object as PropType<ITrainComponent>,
        required: true,
    },
});

const component = props.comp;

function getImageUrl(name: string) {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
}

const imageUrl = getImageUrl(component.image);
</script>

<template>
    <div class="card card-side bg-base-100 shadow-xl">
        <figure><img :src="imageUrl" class="w-full" /></figure>
        <div class="card-body prose">
            <h2 class="card-title">Description</h2>
            <p>{{ component.number }}</p>
        </div>
    </div>
</template>
