import { styled } from 'styles'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  width: '100%',
  maxWidth: 1220,
  padding: '0 1.4rem',
  paddingTop: '2rem',
  paddingBottom: '4rem',
  margin: '0 auto',

  '@bp1': {
    gridTemplateColumns: '1fr',
    gap: '2.5rem',
  },
})

export const ImageContainer = styled('main', {
  width: '100%',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    width: '100%',
    height: 656,
  },
})

export const ProductDetails = styled('main', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    padding: '1.25rem',
    cursor: 'pointer',
    borderRadius: 8,
    fontSize: '$md',

    '&:disabled': {
      opacity: 0.5,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },

  '@bp1': {
    button: {
      marginTop: '2.5rem',
    },
  },
})
