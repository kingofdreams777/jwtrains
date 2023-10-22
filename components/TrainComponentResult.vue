<script setup lang="ts">
import type { ITrainComponent, ITrainArticle } from '~/drizzle/types';
const props = defineProps({
    comp: {
        type: Object as PropType<ITrainComponent>,
        required: true,
    },
    article: {
        type: Object as PropType<ITrainArticle>,
        required: false,
    },
});

const component = props.comp;

function getImageUrl(name: string) {
    return new URL(`../assets/images/${name}`, import.meta.url).href;
}

const imageUrl = getImageUrl(component.image);
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
                                <p><b>Number:</b> {{ article?.number }}</p>
                                <p><b>Category:</b> {{ article?.category }}</p>
                                <p><b>Description:</b> {{ article?.description }}</p>
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
