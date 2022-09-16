import { globalCss } from 'styles'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray300',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,
  },
  'h1, h2, h3, h4, h5, h6': {
    color: '$gray100',
  },
})
