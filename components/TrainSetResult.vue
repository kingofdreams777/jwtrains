<script setup lang="ts">
import type { ITrainSet, ITrainComponent } from '~/drizzle/types';
import type { TrainComponentRequest } from '~/models/trainrequests';
const props = defineProps({
    trainset: {
        type: Object as PropType<ITrainSet>,
        required: true,
    },
});

function getImageUrl(name: string) {
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
                                <thead>
                                    <th>Component #</th>
                                    <th>Description</th>
                                </thead>
                                <tbody>

                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
