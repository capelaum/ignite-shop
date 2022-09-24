import { Header } from 'components/Header'
import { AppProps } from 'next/app'
import { globalStyles } from 'styles/global'
import { Container } from 'styles/pages/app'
import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={process.env.STRIPE_SECRET_KEY}
      currency="BRL"
      loading={<p aria-live="polite">Carregando...</p>}
    >
      <Container>
        <Header />

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
