<template>
    <div class="bg-base-200">
        <div class="navbar px-4 md:max-w-2xl md:mx-auto">
            <div class="navbar-start">
                <NuxtLink to="/">
                    <span class="text-xl text-secondary">king</span>
                    <span class="text-xl">.gdn</span>
                </NuxtLink>
            </div>
            <div class="navbar-center">
            </div>
            <ThemeToggle class="navbar-end pr-4" />
            <div class="hidden navbar-end md:flex gap-4">
                <NuxtLink v-for="link in links" :to="link.url">
                    {{ link.display }}
                </NuxtLink>
            </div>
            <div class="dropdown">
                <label tabindex="0" class="btn btn-ghost md:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        class="inline-block w-5 h-5 stroke-current">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>
                </label>
                <ul tabindex="0" class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 w-52 right-0">
                    <li v-for="link in links">
                        <NuxtLink :to="link.url">{{ link.display }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface LinkType {
    display: string,
    url: string
}

const links: LinkType[] = [
    { display: 'projects', url: '/projects' },
    { display: 'updates', url: '/updates' },
    { display: 'contact', url: '/contact' },
]
</script>