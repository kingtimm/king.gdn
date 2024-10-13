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
  publishedAt: data.publishedAt,
} 

if (data.posterImage)
  ogImageOptions.posterImage = `/${data.posterImage}`

defineOgImageComponent('Default', ogImageOptions)
</script>

<template>
  <article class="mx-auto prose">
    <h1>{{ data.title }}</h1>
    <ContentDoc />
    <NuxtLink to="/projects" class="text-xs prose">
      back to projects
    </NuxtLink>
  </article>
</template>
