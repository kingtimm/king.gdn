// uno.config.ts
import { defineConfig, presetWebFonts, transformerDirectives, transformerVariantGroup } from 'unocss'
import { presetUno, presetTypography, presetIcons } from 'unocss'
import { presetDaisy } from 'unocss-preset-daisy'

export const themes = [
    {
        "light": {
            "primary": "#142370",
            "secondary": "#3aa0b2",
            "accent": "#c44335",
            "neutral": "#271e38",
            "base-100": "#fcfcfd",
            "info": "#acd9ec",
            "success": "#176341",
            "warning": "#f7c76e",
            "error": "#e85463",
        },
    },
    {
        "dark": {
            "primary": "#142370",
            "secondary": "#3aa0b2",
            "accent": "#c44335",
            "neutral": "#161b27",
            "base-100": "#2c373f",
            "info": "#acd9ec",
            "success": "#176341",
            "warning": "#f7c76e",
            "error": "#e85463",
        },
    },
    {
        "black": {
            "primary": "#142370",
            "secondary": "#3aa0b2",
            "accent": "#c44335",
            "neutral": "#161b27",
            "base-100": "#000000",
            "info": "#acd9ec",
            "success": "#176341",
            "warning": "#f7c76e",
            "error": "#e85463",
        },
    },
]

export default defineConfig({
    // ...UnoCSS options
    content: {
        filesystem: [
            "content/**/*.md",
            "content/*.md",
        ]
    },
    transformers: [
        transformerDirectives(),
        //     transformerVariantGroup(),
    ],
    presets: [
        presetUno(),
        presetIcons(),
        presetTypography(),
        presetWebFonts({
            provider: 'bunny',
            fonts: {
                sans: 'Arimo:400,700',
            }
        }),
        presetDaisy(
            {
                //@ts-ignore this is ok
                themes
            }
        )],
})