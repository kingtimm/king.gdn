// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxt/content', '@unocss/nuxt', '@vueuse/nuxt'],
  css: ['@unocss/reset/tailwind.css'],

  content: {
    // documentDriven: true
    navigation: {
      fields: ['author', 'publishedAt', 'posterImage']
    }
  },

  devtools: {
    enabled: true
  }
})
