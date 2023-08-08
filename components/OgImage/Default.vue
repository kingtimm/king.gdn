<script setup lang="ts">
import assert from 'assert'

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
    if (props.posterImage === undefined)
        return false
    return true
})

</script>

<template>
    <div style="color: #1c1c1c; background-image: linear-gradient(135deg, #cccccc 0%, #399FB1 100%);"
        class="w-full h-full flex">
        <div class="flex flex-col h-full p-8" :class="shouldShowImage ? 'w-2/3' : 'w-full'">
            <div style="font-size: 60px" class="flex-none">
                <span style="color: #399FB1; font-weight: bold;">king</span>.gdn
                <p class="-mt-6">
                    <NuxtTime class="text-right text-2xl opacity-80" :datetime="props.publishedAt!" day="numeric"
                        month="long" year="numeric">
                    </NuxtTime>
                </p>
            </div>
            <div class="grow flex flex-col justify-center">
                <h1 class="my-1" style="font-size: 70px;">
                    {{ props.title }}
                </h1>
                <h2 style="font-size: 40px; font-weight: normal;">
                    {{ props.description }}
                </h2>
            </div>
        </div>
        <div class="">
            <img v-if="shouldShowImage" :src="props.posterImage" class="h-full w-96 left-0 top-0 object-cover" />
        </div>
    </div>
</template>
