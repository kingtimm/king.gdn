// @vitest-environment nuxt
import { describe, expect, it } from 'vitest'
import { mockNuxtImport, mountSuspended } from '@nuxt/test-utils/runtime'
import App from '~/app.vue'

describe('nuxt content queries features', () => {
  it('can grab a list of content nested without a .children', async () => {
    // this test does not work because nuxt-vitest does not start a server

    mockNuxtImport('useColorMode', () => {
      return () => {
        return {
          value: 'dark',
          preference: 'light',
        }
      }
    })

    const app = await mountSuspended(App)
    expect(app.html()).toMatchInlineSnapshot(`
      "<div class=\\"min-h-screen flex flex-col\\">
        <div class=\\"sticky top-0 z10 bg-base-300/70 shadow backdrop-blur\\">
          <div class=\\"px-4 navbar md:mx-auto md:max-w-2xl\\">
            <div class=\\"navbar-start\\"><a href=\\"/\\" class=\\"text-xl\\"><span class=\\"font-bold text-secondary\\">king</span><span>.gdn</span></a></div>
            <div class=\\"navbar-center\\"></div>
            <div class=\\"navbar-end md:gap-4\\"><button class=\\"btn btn-ghost\\">
                <div class=\\"i-carbon-sun inline-block align-middle\\" style=\\"display: none;\\"></div>
                <div class=\\"i-carbon-moon inline-block align-middle\\"></div>
                <div class=\\"i-carbon-contrast inline-block align-middle\\" style=\\"display: none;\\"></div>
              </button><a href=\\"/projects\\" class=\\"hidden md:flex\\">projects</a><a href=\\"/updates\\" class=\\"hidden md:flex\\">updates</a><a href=\\"/contact\\" class=\\"hidden md:flex\\">contact</a>
              <div class=\\"md:hidden\\"><button class=\\"btn btn-ghost\\"><svg xmlns=\\"http://www.w3.org/2000/svg\\" fill=\\"none\\" viewBox=\\"0 0 24 24\\" class=\\"inline-block h-5 w-5 stroke-current\\">
                    <path stroke-linecap=\\"round\\" stroke-linejoin=\\"round\\" stroke-width=\\"2\\" d=\\"M4 6h16M4 12h16M4 18h16\\"></path>
                  </svg></button>
                <!--teleport start-->
                <!--teleport end-->
              </div>
            </div>
          </div>
        </div>
        <div class=\\"m-4 md:mx-auto md:w-xl\\">
          <main>
            <p>Document not found, overwrite this content with #not-found slot in <ContentDoc>.</p>
          </main>
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
  })
}, { timeout: 10000 })
