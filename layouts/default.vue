<script setup lang="ts">

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="m-4 md:mx-auto md:w-xl">
      <slot />
    </div>
    <Footer />
    <div class="flex-1" />
  </div>
</template>

<style>
h1,
h2,
h3,
h4,
h5,
h6 a {
    text-decoration: none;
}

.prose h1 a,
.prose h2 a,
.prose h3 a,
.prose h4 a,
.prose h5 a,
.prose h6 a {
    text-decoration: none;
}
</style>
