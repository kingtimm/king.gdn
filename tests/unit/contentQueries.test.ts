// /** @vitest-environment node */

// import { describe, expect, it } from 'vitest'
// import { createPage, setup, url } from '@nuxt/test-utils'

// await setup({})

// describe(
//   'site behavior',
//   () => {
//     it('renders a query', async () => {
//       const logs: string[] = []
//       const page = await createPage()
//       page.on('console', msg => logs.push(msg.text()))
//       await page.goto(url('/'))
//       await page.waitForLoadState('networkidle')
//       expect(
//         await page.getByText('Hey Folks!').innerHTML()).toMatchInlineSnapshot('"<!--[--><span>👋</span> Hey folks!<!--]-->"')
//       expect(logs).toMatchInlineSnapshot('[]')
//     })
//   },
//   { timeout: 10000 },
// )
