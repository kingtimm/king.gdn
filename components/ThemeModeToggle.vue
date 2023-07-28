<template>
    <button @click="nextTheme()">
        <div v-show="state === 'light'" class="i-carbon-sun inline-block align-middle"></div>
        <div v-show="state === 'dark'" class="i-carbon-moon inline-block align-middle"></div>
        <div v-show="state === 'black'" class="i-carbon-contrast inline-block align-middle"></div>
    </button>
</template>

<script setup lang="ts">
import { useCycleList } from '@vueuse/core'
const colorMode = useColorMode()
const themes = [
    'light',
    'dark',
    'black'
]
const { state, next, prev } = useCycleList(themes)

// match the state in the cycle
state.value = colorMode.value
if (colorMode.preference === 'system') {
    console.log(`setting colormode`)
    colorMode.preference = colorMode.value
}

function nextTheme() {
    next()
    colorMode.preference = state.value
}

</script>