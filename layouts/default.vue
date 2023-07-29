<template>
    <div>
        <Header />
        <div class="m-4 md:mx-auto md:max-w-2xl">
            <slot />
        </div>
        <Footer />
        <div class="h-screen"></div>
    </div>
</template>

<script setup lang="ts">

</script>

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
