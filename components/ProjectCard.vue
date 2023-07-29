<template>
    <div class="card card-compact bg-base-200">
        <NuxtLink :to="path">
            <figure><img :src="posterImage" class="h-32 w-full object-cover object-top" /></figure>
            <div class="card-body h-32 flex justify-between rounded">
                <h2 class="card-title">{{ title }}</h2>
                <NuxtTime class="text-right" :datetime="publishedAt" day="numeric" month="long" year="numeric" />
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