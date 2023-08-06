<template>
    <article class="prose mx-auto">
        <ContentDoc />
        <NuxtLink to="/projects" class="prose text-xs">back to projects</NuxtLink>
    </article>
</template>

<script setup lang="ts">
const path = useRoute().path

const data = await queryContent(path)
    .only(['_path', 'title', 'posterImage', 'description', 'publishedAt'])
    .findOne()

const ogImageOptions = {
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