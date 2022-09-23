import { AppProps } from 'next/app'
import Image from 'next/image'
import { globalStyles } from 'styles/global'
import { Container, Header } from 'styles/pages/app'

globalStyles()

import logo from '../assets/logo.svg'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={logo} alt="logo" />
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
