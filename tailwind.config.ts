import daisyui from 'daisyui';
import typography from '@tailwindcss/typography'

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

module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [daisyui, typography],
  daisyui: {
    themes
  }
}
