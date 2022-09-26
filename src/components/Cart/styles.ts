import { styled } from 'styles'

export const CloseButtonContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  margin: '1.5rem 0',

  button: {
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: '$gray500',

    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      color: '$green500',
    },
  },
})

export const CartContainer = styled('div', {
  position: 'absolute',
  top: 0,
  bottom: 0,
  right: 0,
  zIndex: 1,
  width: 480,

  paddingLeft: '3rem',
  paddingRight: '2rem',
  paddingBottom: '3rem',

  backgroundColor: '$gray800',
  color: '$gray100',

  transition: 'all 0.3s ease-in-out',

  h2: {
    fontSize: '$lg',
    fontWeight: 600,
  },
})

export const CartContentContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
})

export const CartEntriesContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  height: '100%',
  overflowY: 'scroll',
  margin: '2rem 0',

  '&::-webkit-scrollbar': {
    background: '$transparent',
    width: '10px',
    '&:hover': {
      background: '$gray900',
      width: '10px',
    },
  },

  '&::-webkit-scrollbar-thumb': {
    background: '$green500',
    borderRadius: '50px',
    width: '20px',
    '&:hover': {
      background: '$green300',
      width: '5px',
    },
  },
})

export const CartEntryContainer = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '1rem',
})

export const CartEntryImageContainer = styled('div', {
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  width: 100,
  height: 100,

  img: {
    objectFit: 'cover',
  },
})

export const CartEntryDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',

  h3: {
    fontSize: '$md',
    fontWeight: 400,
    color: '$gray300',
  },

  p: {
    fontSize: '$md',
    fontWeight: 600,
    color: '$gray100',
  },

  button: {
    display: 'inline-flex',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontWeight: 600,

    marginTop: '1rem',
    fontSize: '$sm',

    color: '$green500',

    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const CartFooter = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  marginTop: 'auto',

  div: {
    display: 'flex',
    justifyContent: 'space-between',

    p: {
      fontSize: '$sm',
    },

    strong: {
      fontSize: '$lg',
    },
  },

  button: {
    padding: '1.25rem',
    borderRadius: 8,
    border: 'none',
    backgroundColor: '$green500',
    color: '$gray100',
    marginTop: '3rem',
    fontSize: '$lg',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    transition: 'all 0.2s ease-in-out',

    '&:hover': {
      backgroundColor: '$green300',
    },
  },
})
