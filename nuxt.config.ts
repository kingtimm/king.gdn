// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@unocss/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-time',
    'nuxt-og-image'
  ],
  css: ['@unocss/reset/tailwind.css'],
  experimental: {
    viewTransition: true
  },
  nitro: {
    // prerender: {
    //   routes: [
    //     '/updates/',
    //     '/projects/',
    //   ]
    // }
    prerender: {
      crawlLinks: true
    }
  },
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
  },
  site: {
    url: 'https://king.gdn',
  },
})
