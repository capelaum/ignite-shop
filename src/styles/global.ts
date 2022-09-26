import { globalCss } from 'styles'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  html: {
    scrollBehavior: 'smooth',
  },
  body: {
    backgroundColor: '$gray900',
    color: '$gray300',
    fontFamily: 'Roboto, sans-serif',
    fontWeight: 400,

    scrollbarWidth: 'thin',
    scrollbarColor: '$green500 $green500',

    '&::-webkit-scrollbar': {
      background: '$gray800',
      width: '10px',
      '&:hover': {
        background: '$gray800',
        width: '10px',
      },
    },

    '&::-webkit-scrollbar-thumb': {
      background: '$green500',
      borderRadius: '50px',
      width: '10px',
      '&:hover': {
        background: '$green300',
        width: '10px',
      },
    },
  },
  'h1, h2, h3, h4, h5, h6': {
    color: '$gray100',
  },

  'a, button': {
    cursor: 'pointer',
    border: 'none',
  },
})
