<template>
    <article class="prose mx-auto">
        <h1>{{ data.title }}</h1>
        <p class="text-xs opacity-80">
            Original Project Date: <NuxtTime :datetime="data.publishedAt" day="numeric" month="long"
            year="numeric" />
        </p>
            
        <ContentDoc />
        <NuxtLink to="/projects" class="prose text-xs">back to projects</NuxtLink>
    </article>
</template>

<script setup lang="ts">
import { OgImageOptions } from 'nuxt-og-image/dist/runtime/types';

const path = useRoute().path

const data = await queryContent(path)
    .only(['_path', 'title', 'posterImage', 'description', 'publishedAt'])
    .findOne()

const ogImageOptions: OgImageOptions = {
    title: data.title,
    description: data.description,
    component: 'Default',
    posterImage: '',
    publishedAt: data.publishedAt
}

if (data.posterImage) {
    ogImageOptions.posterImage = `/${data.posterImage}`
}

defineOgImage(ogImageOptions)

</script>