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
  