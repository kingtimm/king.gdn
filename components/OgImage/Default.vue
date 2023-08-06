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
    console.log(`poster image! ${props.posterImage}`)
    if (props.posterImage === undefined)
        return false
    return true
})

</script>

<template>
    <div class="pl-8 w-full h-full flex flex-col og-container justify-center">
        <img v-if="shouldShowImage" :src="props.posterImage"
            class="h-48 w-96 posterimage left-0 top-0 object-cover object-top" />
        <h1>
            {{ props.title }}
        </h1>
        <h2>
            {{ props.description }}
        </h2>
    </div>
    <div class="absolute right-0 top-0 m-8 logo text-right">
        <span class="font-bold king">king</span>
        <span>.gdn</span>
        <p>
            <NuxtTime class="text-right text-xl opacity-80" :datetime="props.publishedAt!" day="numeric" month="long"
                year="numeric">
            </NuxtTime>
        </p>
    </div>
</template>

<style scoped>
h1 {
    font-size: 70px;
}

h2 {
    font-size: 40px;
    font-weight: normal;
}

.og-container {
    color: #1c1c1c;
    background-image: linear-gradient(-135deg, #cccccc 0%, #399FB1 100%);
}

.logo {
    font-size: 50px
}

.posterimage {
    border: 4px solid gray
}

.king {
    color: #399FB1;
    font-weight: bold;
}
</style>
