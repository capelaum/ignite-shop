import { styled } from 'styles'

export const HomeContainer = styled('main', {
  display: 'flex',
  width: '100%',
  padding: '2rem 1.4rem',
})

export const SliderContainer = styled('div', {
  width: '100%',
  minHeight: 512,
  position: 'relative',

  display: 'flex',
  alignItems: 'center',

  maxWidth: 'calc(100vw - (100vw - 1180px) / 2)',
  marginLeft: 'auto',
  cursor: 'grab',
})

export const SliderArrow = styled('button', {
  position: 'absolute',
  top: 0,
  zIndex: 1,
  width: 64,
  height: '100%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$gray300',

  transition: 'all 0.3s ease-in-out',

  '&:hover': {
    color: '$green300',
  },

  '&:disabled': {
    display: 'none',
    cursor: 'not-allowed',
  },
})
