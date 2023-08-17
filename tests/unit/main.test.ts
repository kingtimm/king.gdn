// @vitest-environment nuxt
import { describe, expect, it } from 'vitest'
import { mountSuspended } from 'vitest-environment-nuxt/utils'
import App from '~/app.vue'

describe('nuxt content queries features', () => {
  it('can grab a list of content nested without a .children', async () => {
    // this test does not work because nuxt-vitest does not start a server

    const app = await mountSuspended(App, { route: '/api/ping' })
    expect(app.html()).toMatchInlineSnapshot(`
      "<div class=\\"min-h-screen flex flex-col\\">
        <!-- <Header /> -->
        <div class=\\"m-4 md:mx-auto md:w-xl\\">
          <!---->
        </div>
        <footer class=\\"bg-base-300/70 p-10 text-base-content shadow footer footer-center\\">
          <div class=\\"px-4 md:mx-auto md:max-w-2xl\\">
            <div>
              <p class=\\"text-xs\\"> Copyright © 2023 - All right reserved </p>
            </div>
            <div class=\\"grid grid-flow-col gap-4 text-xl\\">
              <div class=\\"grid grid-flow-col gap-4\\"><a href=\\"https://github.com/kingtimm\\" class=\\"font-normal no-underline\\">
                  <div class=\\"i-carbon-logo-github mr-1 inline-block align-middle\\"></div>
                </a><a href=\\"https://elk.zone/mastodon.social/@timking\\" class=\\"font-normal no-underline\\">
                  <div class=\\"i-carbon-logo-mastodon mr-1 inline-block align-middle\\"></div>
                </a></div>
            </div>
          </div>
        </footer>
        <div class=\\"flex-1\\"></div>
      </div>"
    `)

    // const a = useNuxtApp()

    // const contentFolderListing = await mountSuspended(UpdatesIndex, {
    // })

    // expect(contentFolderListing.html()).toMatchInlineSnapshot(`
    //   "<div class=\\"\\">
    //     <div class=\\"prose\\">
    //       <h1>updates</h1>
    //     </div>
    //     <div class=\\"w-full\\">
    //       <ul class=\\"ml-5 list-disc\\"></ul>
    //     </div>
    //   </div>"
    // `)

    // const { data } = await listing.getListing()
    // expect(listing.folderName).toEqual('updates')
    // expect(data).toMatchInlineSnapshot(`
    //   RefImpl {
    //     "__v_isRef": true,
    //     "__v_isShallow": false,
    //     "_rawValue": null,
    //     "_value": null,
    //     "dep": undefined,
    //   }
    // `)
  })
}, { timeout: 10000 })
