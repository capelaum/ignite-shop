import { styled } from 'styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 1.4rem',
  width: '100%',
  maxWidth: 1220,
  margin: '0 auto',

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
