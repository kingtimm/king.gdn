<template>
  <div class="">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">

const { $theme } = useNuxtApp()
const { store } = $theme.mode
console.log([store, $theme])
$theme.mode = store
if (!$theme.mode) {
}

</script>