<template>
    <main class="prose mx-auto">
        <ContentDoc v-slot="{ doc }">
            <h1 class="mb-0">{{ doc.title }}</h1>
            <NuxtTime class="text-right text-sm opacity-80" :datetime="doc.publishedAt" day="numeric" month="long"
                year="numeric" />
            <ContentRenderer :value="doc" />
        </ContentDoc>
        <NuxtLink to="/updates" class="prose text-xs">back to updates</NuxtLink>
    </main>
</template>

<script setup>
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