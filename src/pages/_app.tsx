import { AppProps } from 'next/app'
import Image from 'next/future/image'
import Link from 'next/link'
import { globalStyles } from 'styles/global'
import { Container, Header } from 'styles/pages/app'

globalStyles()

import logo from '../assets/logo.svg'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/" passHref>
          <Image src={logo} alt="logo" />
        </Link>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
