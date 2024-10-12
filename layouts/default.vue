<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div class="my-8 md:max-w-xl w-full mx-auto px-2 max-w-sm">
      <slot />
    </div>
    <Footer />
    <div class="flex-1" />
  </div>
</template>
