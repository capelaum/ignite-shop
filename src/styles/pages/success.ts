import { styled } from 'styles'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 auto',
  padding: '0 1.4rem',
  height: 512,

  h1: {
    marginTop: '3rem',
    marginBottom: '1.5rem',
    fontSize: '$xl',
    color: '$gray100',
    textAlign: 'center',
  },

  p: {
    color: '$gray300',
    fontSize: '$xl',
    maxWidth: 560,
    lineHeight: 1.6,
    textAlign: 'center',
  },

  a: {
    display: 'block',
    marginTop: '5rem',
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$green500',
    textDecoration: 'none',

    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ProductsContainer = styled('section', {
  position: 'relative',

  height: 140,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const ImageContainer = styled('main', {
  width: 140,
  height: 140,

  position: 'absolute',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 999,
  padding: '0.125rem',

  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',

  img: {
    objectFit: 'cover',
  },
})
