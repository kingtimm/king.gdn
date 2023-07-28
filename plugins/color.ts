// import { themes } from '~/uno.config'
import { useColorMode, useCycleList } from '@vueuse/core'

export default defineNuxtPlugin(nuxtApp => {
    // const themeNames = themes.map(row => Object.keys(row)[0])
    const themeNames = ['auto', 'dark', 'light', 'black']
    const mode = useColorMode({
        attribute: "data-theme",
        initialValue: 'auto',
    })
    const { state, next } = useCycleList(themeNames)
    watchEffect(() => mode.value = state.value as any)

    return {
        provide: {
            theme: {
                next,
                themeNames,
                mode,
                state,
            }
        }
    }
})