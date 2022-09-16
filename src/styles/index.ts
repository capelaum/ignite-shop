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
      gray300: '#C4C4CC',
      gray100: '#E1E1E6',
    },
  },
})
