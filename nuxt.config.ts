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
  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      meta: [
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ]
    }
  },
  experimental: {
    viewTransition: true
  },
  nitro: {
    prerender: {
      crawlLinks: true
    }
  },
  ogImage: {
    debug: true,
    fonts: ['Arimo:400', 'Arimo:700'],
    runtimeBrowser: false,
  },
  content: {
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
