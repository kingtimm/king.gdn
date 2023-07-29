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

.prose :where(a):not(:where(.not-prose, .not-prose *, h1, h2, h3, h4, h5, h6)) {
    text-decoration: none;
}
</style>
