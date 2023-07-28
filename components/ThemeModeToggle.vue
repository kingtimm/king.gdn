<template>
    <button @click="$theme.next()">
        <div v-if="$theme.mode.value === 'auto'">{{ $theme.mode.value }}</div>
        <div v-if="$theme.state.value === 'dark'" class="i-carbon-moon inline-block align-middle"></div>
        <div v-if="$theme.state.value === 'light'" class="i-carbon-sun inline-block align-middle"></div>
        <div v-if="$theme.state.value === 'black'" class="i-carbon-contrast inline-block align-middle"></div>
    </button>
</template>

<script setup lang="ts">
const { $theme } = useNuxtApp()
</script>