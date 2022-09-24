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
    fontSize: '$2xl',
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

export const ImageContainer = styled('main', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',
  marginBottom: '2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
