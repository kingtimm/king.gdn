<template>
  <div class="">
    <div class="prose">
      <h1>updates</h1>
    </div>
    <div class="w-full flex flex-col gap-4">
      <ContentFolderListing v-slot="{ data }" folder-name="updates">
        <div v-for="link of data" :key="link._path" class="bg-base-200 p-3">
          <NuxtLink :to="link._path" class="no-underline">
            <p class="text-lg font-bold text-secondary">
              {{ link.title }}
            </p>
            <p class="text-sm">
              {{ link.excerpt.children[0].children[0].value ?? '' }}
            </p>
            <p class="text-right text-sm opacity-80">
              <NuxtTime :datetime="link.publishedAt" day="numeric" month="long" year="numeric" />
            </p>
          </NuxtLink>
        </div>
      </ContentFolderListing>
    </div>
  </div>
</template>
