<template>
    <div class="card card-compact bg-base-200">
        <NuxtLink :to="path">
            <figure><img :src="posterImage" class="h-48 w-full object-cover object-top" /></figure>
            <div class="card-body">
                <h2 class="card-title">{{ title }}</h2>
                <p>{{ publishedAt }}</p>
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