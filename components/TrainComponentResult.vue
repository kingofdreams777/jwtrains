<script setup lang="ts">
import type { ITrainComponent, ITrainArticle } from '~/drizzle/types';
import type { TrainArticleRequest } from '~/models/trainrequests';
const props = defineProps({
    comp: {
        type: Object as PropType<ITrainComponent>,
        required: true,
    }
});

const comp = props.comp;

const {data , pending, error} = await useLazyAsyncData<ITrainArticle[]>(() => {
    const request: TrainArticleRequest = {
    component: [comp.number]
    }
    return $fetch('/api/trainarticles/', {
        method: 'POST',
        body: request
    })
})

function getImageUrl(name: string) {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
}



const imageUrl = getImageUrl(comp.image);
</script>

<template>
    <div class="table overflow-x-auto bg-white">
        <table class="border-black">
            <thead class=" table-header-group">
                <th class=" table-caption">Component</th>
                <th>Description</th>
            </thead>
            <tbody class="">
                <tr class="table-row">
                    <td class="table-cell border-black">
                        <div class="flex items-center space-x-3">
                            <div class="avatar">
                                <NuxtImg :src="imageUrl" class="w-full h-full" />
                            </div>
                        </div>
                    </td>
                    <td class="table-cell border-black">
                        <div class="flex flex-col">
                            <p><b>Component Number:</b> {{ comp.number }}</p>
                            <p><b>Description:</b> {{ comp.description }}</p>
                            <p><b>Gauge:</b> {{ comp.gauge }}</p>
                            <div>
                                <p><b>Repair Article by JWTrains</b></p>
                                <div v-if="pending" class="flex flex-row">
                                <span class="loading loading-spinner loading-lg"></span>
                                </div>
                                <div v-else v-for="article in data" :key="article.number">
                                    <p><b>Number:</b> {{ article.number }}</p>
                                    <p><b>Category:</b> {{ article.category }}</p>
                                    <p><b>Description:</b> {{ article.description }}</p>
                                </div>
                            </div>
                            <div class="table overflow-x-auto border-black">
                                <p><b>Sets containing this component:</b></p>
                                <div class=" table">
                                    <table>
                                        <thead>
                                            <th>Set #</th>
                                            <th>Year</th>
                                            <th>Price</th>
                                            <th>Gauge</th>
                                            <th>Description</th>
                                            <th>Track</th>
                                            <th>Transformer</th>
                                        </thead>
                                        <tbody>
                                            <tr v-for="set in comp.sets" :key="set.number">
                                                <td>{{ set.number }}</td>
                                                <td>{{ set.year }}</td>
                                                <td>{{ set.price }}</td>
                                                <td>{{ set.gauge }}</td>
                                                <td>{{ set.description }}</td>
                                                <td>{{ set.track }}</td>
                                                <td>{{ set.transformer }}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
