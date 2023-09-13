import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    dir: 'tests/',
    environmentOptions: {
      nuxt: {
        overrides: {

        },
      },
    },
  },
})
