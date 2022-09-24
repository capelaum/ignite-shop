import { createStitches } from '@stitches/react'

export const {
  config,
  theme,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',

      green500: '#00875F',
      green300: '#00B37E',

      gray900: '#121214',
      gray800: '#202024',
      gray500: '#8D8D99',
      gray300: '#C4C4CC',
      gray100: '#E1E1E6',
    },

    fontSizes: {
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },

  media: {
    bp1: '(max-width: 768px)',
  },
})
