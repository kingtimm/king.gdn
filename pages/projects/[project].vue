<script setup lang="ts">
import type { OgImageOptions } from 'nuxt-og-image/dist/runtime/types'

const path = useRoute().path

const data = await queryContent(path)
  .only(['_path', 'title', 'posterImage', 'description', 'publishedAt'])
  .findOne()

const ogImageOptions: OgImageOptions = {
  title: data.title,
  description: data.description,
  component: 'Default',
  posterImage: '',
  publishedAt: data.publishedAt,
}

if (data.posterImage)
  ogImageOptions.posterImage = `/${data.posterImage}`

defineOgImage(ogImageOptions)
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
