<script setup lang="ts">
import type { ITrainSet, ITrainComponent } from '~/drizzle/types';
import type { TrainComponentRequest } from '~/models/trainrequests';
import { ref } from 'vue';
const props = defineProps({
    trainset: {
        type: Object as PropType<ITrainSet>,
        required: true,
    },
});

const trainset = props.trainset;

const { data: components } = await useLazyAsyncData<ITrainComponent[]>(`${trainset.number}/components`, () => {
    const request: TrainComponentRequest = {
        sets: [trainset.number],
        numbers: undefined,
        description: undefined,
    };

    return $fetch('/api/traincomponents/', {
        method: 'POST',
        body: request,
    });
});

const componentImage: Ref<string> = ref('');

function getImageUrl(name: string): string {
    if (name == '') {
        return new URL(`../assets/images/noImage.jpg`, import.meta.url).href;
    }
    return new URL(`../assets/images/${name}`, import.meta.url).href;
}
</script>

<template>
    <div class="table overflow-x-auto bg-white">
        <table class="border-black">
            <thead class=" table-header-group">
                <th>Set</th>
                <th>Components</th>
            </thead>
            <tbody class="">
                <tr class="table-row">
                    <td class="table-cell border-black">
                        <div>
                            <p><b>Number:</b> {{ trainset.number }}</p>
                            <p><b>Year:</b> {{ trainset.year }}</p>
                            <p><b>Gauge:</b> {{ trainset.gauge }}</p>
                            <p><b>Description:</b> {{ trainset.description }}</p>
                            <p><b>Track:</b> {{ trainset.track }}</p>
                            <p><b>Transformer:</b> {{ trainset.transformer }}</p>
                        </div>
                    </td>
                    <td class="table-cell border-black">
                        <div class="table overflow-x-auto bg-white">
                            <table>
                                <thead class="table-header-group">
                                    <th class="">Component #</th>
                                    <th>Description</th>
                                </thead>
                                <tbody>
                                    <tr class="table-row" v-for="component in components">
                                        <td class="table-cell">
                                            <div v-if="component.image != ''">
                                                <a :href="getImageUrl(component.image)" class="link text-accent"
                                                    target="_blank">{{
                                                        component.number }}</a>
                                            </div>
                                            <div v-else>
                                                <p>{{ component.number }}</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p>{{ component.description }}</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
