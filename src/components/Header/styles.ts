import { styled } from 'styles'

export const HeaderContainer = styled('header', {
  padding: '2rem 1.4rem',
  width: '100%',
  maxWidth: 1220,
  margin: '0 auto',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  img: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',

    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      opacity: 0.9,
    },
  },
})

export const CartButton = styled('button', {
  padding: '1rem',
  borderRadius: 8,
  border: 'none',
  backgroundColor: '$gray800',
  color: '$gray300',
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all 0.2s ease-in-out',

  '&:disabled': {
    cursor: 'not-allowed',
    color: '$gray500',
  },

  '&:not(:disabled):hover': {
    color: '$green500',
  },

  span: {
    position: 'absolute',
    top: -8,
    right: -8,
    width: '1.8125rem',
    height: '1.8125rem',

    color: '$gray100',
    backgroundColor: '$green500',
    fontSize: '0.875rem',
    fontWeight: 'bold',

    borderRadius: 50,
    border: '2px solid $gray800',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddin: '0.25rem',
  },
})
