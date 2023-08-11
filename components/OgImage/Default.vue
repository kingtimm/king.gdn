<script setup>
import { computed } from 'vue'

// inherited attrs can mess up the satori parser
defineOptions({
  inheritAttrs: false,
})

const props = defineProps({
  title: String,
  description: String,
  publishedAt: String,
  posterImage: String,
})

const shouldShowImage = computed(() => {
  return (props.posterImage !== undefined)
})
</script>

<template>
  <div
    style="
        color: #1c1c1c;
        background-image: linear-gradient(135deg, #cccccc 0%, #399FB1 100%);" class="h-full"
    :class="shouldShowImage ? 'w-2/3' : 'w-full'"
  >
    <div class="h-full flex-col p-8">
      <div class="">
        <p class="m-0 p-0 text-7xl">
          <span style="color: #399FB1;" class="font-bold">king</span>.gdn
        </p>
        <p class="text-3xl">
          <NuxtTime :datetime="props.publishedAt" day="numeric" month="long" year="numeric" />
        </p>
      </div>
      <div class="flex-1 flex-col justify-center">
        <h1 class="my-1 text-7xl font-bold" style="font-size: 70px;">
          {{ props.title }}
        </h1>
        <h2 class="text-5xl font-normal">
          {{ props.description }}
        </h2>
      </div>
    </div>
  </div>
  <img
    v-if="shouldShowImage" :src="props.posterImage" class="absolute right-0 top-0 h-full w-1/3"
    style="object-fit: cover;"
  >
</template>
