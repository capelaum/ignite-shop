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
  color: '$gray500',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
