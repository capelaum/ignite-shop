import { styled } from 'styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
  overflow: 'hidden',
  overflowY: 'auto',
  position: 'relative',

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
})
