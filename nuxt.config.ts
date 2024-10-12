// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/color-mode',
    'nuxt-time',
    'nuxt-og-image',
    '@nuxt/test-utils/module',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxt/fonts',
    '@nuxt/eslint',
    '@nuxt/icon',
  ],

  app: {
    head: {
      viewport: 'width=device-width,initial-scale=1,viewport-fit=cover',
      meta: [
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      ],
    },
  },

  experimental: {
    viewTransition: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },

  ogImage: {
    fonts: ['Arimo:400', 'Arimo:700'],
  },

  content: {
    navigation: {
      fields: ['author', 'publishedAt', 'posterImage'],
    },
  },

  colorMode: {
    dataValue: 'theme', // this ties into how Daisy uses themes
  },

  devtools: {
    enabled: true,
  },

  site: {
    url: 'https://king.gdn', // helps og-images be created
  },

  compatibilityDate: '2024-10-11',

})