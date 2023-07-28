// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-time'
  ],
  css: ['@unocss/reset/tailwind.css'],

  content: {
    // documentDriven: true
    navigation: {
      fields: ['author', 'publishedAt', 'posterImage']
    }
  },
  colorMode: {
    dataValue: "theme",
  },
  devtools: {
    enabled: true
  }
})
