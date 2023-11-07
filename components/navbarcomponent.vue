<script setup lang="ts">

const ul: Ref<HTMLElement | null> = ref(null);

</script>
<template>
    <div class="navbar bg-secondary">
        <div class="navbar-start">
            <details id="navbarlist" class="dropdown">
                <summary class="btn btn-ghost btn-circle">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h7" />
                    </svg>
                </summary>
                <ul ref="ul" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <NuxtLink to="/" class="text-lg link">Home</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/about" class="text-lg link">About Me</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/articles" class="text-lg link">Order Articles</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/tools_and_materials" class="text-lg link">Tools & Materials</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/technical_tips" class="text-lg link">Technical Tips</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/interesting_links" class="text-lg link">Interesting Links</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/bulb_list" class="text-lg link">Light Bulb Index</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/videos" class="text-lg link">Buy Videos</NuxtLink>
                    </li>
                    <li>
                        <div class="indicator">
                            <span class="indicator-item badge badge-info">New!</span>
                            <NuxtLink to="/search" class="text-lg link">Search Engine</NuxtLink>
                        </div>
                    </li>
                </ul>
            </details>
        </div>
        <div class="navbar-center">
            <NuxtLink to="/" class="btn btn-ghost normal-case text-xl">JWTrains</NuxtLink>
        </div>
        <div class="navbar-end">
            <SelectTheme />
        </div>
    </div>
</template>
