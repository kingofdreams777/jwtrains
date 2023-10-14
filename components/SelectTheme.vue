<script setup>
import { themeChange } from 'theme-change';
import { onMounted } from 'vue';
const themes = [
    "retro",
    "luxury",
    "autumn",
]

onMounted(() => {
    themeChange(false);
    getTheme();
});

const getTheme = () => {
    const key = localStorage.getItem('theme') || 'retro';
    return key;
}

</script>

<template>
    <div>
        <select v-model="key" class="select w-full select-md" data-choose-theme>
            <option disabled selected>Choose Color Theme</option>
            <option v-for="(theme, index) in themes" :key="index" class="">
                {{ theme }}
            </option>
        </select>
    </div>
</template>
