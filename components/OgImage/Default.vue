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
    <div style="color: #1c1c1c; background-image: linear-gradient(-135deg, #cccccc 0%, #399FB1 100%);"
        class="pl-8 w-full h-full flex flex-col justify-center">
        <img v-if="shouldShowImage" :src="props.posterImage" class="h-48 w-96 left-0 top-0 object-cover object-top" />
        <h1 style="font-size: 70px;">
            {{ props.title }}
        </h1>
        <h2 style="font-size: 40px; font-weight: normal;">
            {{ props.description }}
        </h2>
    </div>
    <div style="font-size: 50px" class="absolute right-0 top-0 m-8 text-right">
        <span style="color: #399FB1; font-weight: bold;">king</span>
        <span>.gdn</span>
        <p>
            <NuxtTime class="text-right text-xl opacity-80" :datetime="props.publishedAt!" day="numeric" month="long"
                year="numeric">
            </NuxtTime>
        </p>
    </div>
</template>
