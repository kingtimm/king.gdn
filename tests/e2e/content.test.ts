import { assert, describe, test } from 'vitest'
import { $fetch, setup, useTestContext } from '@nuxt/test-utils'
import { hash } from 'ohash'

describe('Content Queries', async () => {
  await setup({
    server: true,
  })
  const apiBaseUrl = useTestContext().options.nuxtConfig.content?.api?.baseURL || '/api/_content'

  test('List contents', async () => {
    const params = { only: '_id' }
    const qid = hash(params)
    const docs = await $fetch(`${apiBaseUrl}/query/${qid}`, {
      params: { _params: JSON.stringify(params) },
    })

    const ids = docs.map((doc: any) => doc._id)

    assert(ids.length > 0)
    assert(ids.includes('content:index.md'))
  })
})
