<template>
    <div class="bg-base-200 shadow">
        <div class="navbar px-4 md:max-w-2xl md:mx-auto">
            <div class="navbar-start">
                <NuxtLink to="/" class="text-xl">
                    <span class="font-bold text-secondary">king</span>
                    <span>.gdn</span>
                </NuxtLink>
            </div>
            <div class="navbar-center">
            </div>
            <div class="navbar-end md:gap-4">
                <ThemeToggle />

                <NuxtLink v-for="link in links" :to="link.url" class="hidden md:flex">
                    {{ link.display }}
                </NuxtLink>
                <div class="dropdown dropdown-end md:hidden">
                    <div class="btn btn-ghost" @click.stop="dropdown = !dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            class="inline-block w-5 h-5 stroke-current">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16">
                            </path>
                        </svg>
                    </div>
                    <ul class="menu dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 w-52" v-show="dropdown"
                        :class="{ 'dropdown-open': dropdown }" v-on-click-outside.bubble="(event) => dropdownHandler(event)"
                        @click="dropdown = false">
                        <li v-for=" link  in  links ">
                            <NuxtLink :to="link.url" class="flex flex-col items-center text-lg">
                                {{ link.display }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { vOnClickOutside } from '@vueuse/components'
import type { OnClickOutsideHandler } from '@vueuse/core'

const dropdown = ref(false)
const dropdownHandler: OnClickOutsideHandler = (event?) => {
    dropdown.value = false
}
interface LinkType {
    display: string
    url: string
}

const links: LinkType[] = [
    { display: 'projects', url: '/projects' },
    { display: 'updates', url: '/updates' },
    { display: 'contact', url: '/contact' },
]

</script>

<style>
/* needed in order to let vue control visibility */
.dropdown:is(:not(details)) .dropdown-content {
    visibility: visible;
    opacity: 100;
    transform-origin: top;
}
</style>