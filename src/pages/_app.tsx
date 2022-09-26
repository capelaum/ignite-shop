import { Cart } from 'components/Cart'
import { Header } from 'components/Header'
import { AppProps } from 'next/app'
import { globalStyles } from 'styles/global'
import { Container } from 'styles/pages/app'
import { CartProvider } from 'use-shopping-cart'

globalStyles()

const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      cartMode="checkout-session"
      stripe={stripeKey}
      currency="BRL"
      loading={<p aria-live="polite">Carregando...</p>}
    >
      <Container>
        <Header />

        <Cart />

        <Component {...pageProps} />
      </Container>
    </CartProvider>
  )
}
