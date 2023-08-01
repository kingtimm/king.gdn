<template>
    <div class="card card-compact bg-base-200">
        <NuxtLink :to="path" class="flex-1 flex flex-col">
            <figure><img :src="posterImage" class="h-32 w-full object-cover object-top" /></figure>
            <div class="card-body rounded justify-between">
                <h2 class="card-title text-lg">{{ title }}</h2>
                <NuxtTime class="text-right text-sm opacity-80" :datetime="publishedAt" day="numeric" month="long"
                    year="numeric" />

            </div>
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    title: string,
    publishedAt: string,
    posterImage: string,
    path: string
}>()



</script>