import Head from 'next/head'
import { styled } from 'styles'

const Button = styled('button', {
  backgroundColor: '$green',
  borderRadius: 7,
  border: 0,
  padding: '4px 8px',

  span: {
    color: 'white',
    fontWeight: 'bold',
  },

  '&:hover': {
    backgroundColor: '$greenLight',
  },
})

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h1>Hello Next</h1>

      <Button>
        <span>Click me</span>
      </Button>
    </>
  )
}
