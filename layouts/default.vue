<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="mb-8 md:mx-auto md:w-xl">
      <slot />
    </div>
    <Footer />
    <div class="flex-1" />
  </div>
</template>
