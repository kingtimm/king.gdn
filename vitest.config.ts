import { defineVitestConfig } from 'nuxt-vitest/config'

export default defineVitestConfig({
  test: {
    dir: 'tests/unit',
    environment: 'nuxt',
    environmentOptions: {
      nuxt: {
        overrides: {

        },
      },
    },
  },
})
