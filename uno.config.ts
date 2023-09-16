// uno.config.ts
import { defineConfig, presetIcons, presetTypography, presetUno, presetWebFonts, transformerDirectives } from 'unocss'
import extractorMdc from '@unocss/extractor-mdc'
import { presetDaisy } from 'unocss-preset-daisy'

export const themes = [
  {
    light: {
      'primary': '#3479b1',
      'secondary': '#bc506c',
      'accent': '#2e3343',
      'neutral': '#2e3343',
      'base-100': '#f5f7f4',
      'info': '#acd9ec',
      'success': '#176341',
      'warning': '#f7c76e',
      'error': '#e85463',
    },
  },
  {
    dark: {
      'primary': '#3479b1',
      'secondary': '#bc506c',
      'accent': '#f5f7f4',
      'neutral': '#f5f7f4',
      'base-100': '#1c1f29',
      'info': '#acd9ec',
      'success': '#176341',
      'warning': '#f7c76e',
      'error': '#e85463',
    },
  },
  {
    black: {
      'primary': '#3479b1',
      'secondary': '#bc506c',
      'accent': '#f5f7f4',
      'neutral': '#f5f7ee',
      'base-100': '#000000',
      'info': '#acd9ec',
      'success': '#176341',
      'warning': '#f7c76e',
      'error': '#e85463',
    },
  },
]

export default defineConfig({
  // ...UnoCSS options
  content: {
    filesystem: [
      'content/**/*.md',
      'content/*.md',
    ],
  },
  extractors: [
    extractorMdc(),
  ],
  transformers: [
    transformerDirectives(),
    //     transformerVariantGroup(),
  ],
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(
      {
        cssExtend: {
          'a': {
            // 'color': 'hsl(var(--p))',
            'text-decoration': 'underline',
            'text-underline-offset': '6px',
            'text-decoration-color': 'hsl(var(--s))',
          },
          '.prose h1, .prose h2 a, .prose h3 a, .prose h4 a, .prose h5 a, .prose h6 a': {
            'text-decoration': 'none',
            // 'color': 'hsl(var(--s))',
          },

        },
      },
    ),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Arimo:400,700',
      },
    }),
    presetDaisy(
      {
        // @ts-expect-error this is ok
        themes,
      },
    )],
})
