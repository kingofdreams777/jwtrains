<template>
    <div class="navbar bg-secondary">
        <div class="max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div class="flex space-x-4">
                    <NuxtLink to="/" class="text-lg link">Home</NuxtLink>
                    <NuxtLink to="/about" class="text-lg link">About Me</NuxtLink>
                    <NuxtLink to="/articles" class="text-lg link">Order Articles</NuxtLink>
                    <NuxtLink to="/technical_tips" class="text-lg link">Technical Tips</NuxtLink>
                    <NuxtLink to="/interesting_links" class="text-lg link">Interesting Links</NuxtLink>
                    <NuxtLink to="/bulb_list" class="text-lg link">Light Bulb Index</NuxtLink>
                    <NuxtLink to="/videos" class="text-lg link">Buy Videos</NuxtLink>
                </div>
            </div>
        </div>
        <div class="flex flex-1 items-end justify-end">
            <SelectTheme />
        </div>
    </div>
    <div class="flex flex-col items-center">
        <img class="h-auto max-w-full rounded border bg-black p-1 dark:border-neutral-700 dark:bg-neutral-800 transition-shadow"
            src="@/assets/images/indexbanner.jpg" alt="Banner">
    </div>
</template>
