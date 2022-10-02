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

export const Product = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  position: 'relative',
  overflow: 'hidden',

  width: 500,
  padding: '2rem',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    cursor: 'pointer',
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})

export const ProductFooter = styled('footer', {
  position: 'absolute',
  bottom: '0.25rem',
  left: '0.25rem',
  right: '0.25rem',
  padding: '1.25rem',

  borderRadius: 6,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '0.5rem',

  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  transform: 'translateY(110%)',
  opacity: 0,
  transition: 'all 0.2s ease-in-out',

  strong: {
    fontSize: '$lg',
    color: '$gray100',
  },

  span: {
    fontSize: '$xl',
    fontWeight: 'bold',
    color: '$green300',
  },

  button: {
    padding: '0.75rem',
    borderRadius: 8,
    border: 'none',
    backgroundColor: '$green500',
    color: '$gray100',
    zIndex: 3,

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})

export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
})
