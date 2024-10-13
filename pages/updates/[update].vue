<script setup>
const path = useRoute().path

const data = await queryContent(path)
  .only(['_path', 'title', 'posterImage', 'description', 'publishedAt'])
  .findOne()

const ogImageOptions = {
  title: data.title,
  description: data.description,
  component: 'Default',
  posterImage: undefined,
  publishedAt: data.publishedAt,
}

if (data.posterImage)
  ogImageOptions.posterImage = `/${data.posterImage}`

defineOgImageComponent('Default', ogImageOptions)
</script>

<template>
  <main class="mx-auto prose">
    <ContentDoc v-slot="{ doc }">
      <h1 class="mb-0">
        {{ doc.title }}
      </h1>
      <NuxtTime
        class="text-right text-sm opacity-80" :datetime="doc.publishedAt" day="numeric" month="long"
        year="numeric"
      />
      <ContentRenderer :value="doc" />
    </ContentDoc>
    <NuxtLink to="/updates" class="text-xs text-secondary prose">
      back to updates
    </NuxtLink>
  </main>
</template>
