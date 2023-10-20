<script setup lang="ts">
import { useAsyncData } from 'nuxt/app';

const data = await useAsyncData('/api/trainsets', () => {
    return $fetch('/api/trainsets');
});

console.log(data);

</script>

<template>
    <div>
        <p>{{ data }}</p>
    </div>
</template>

