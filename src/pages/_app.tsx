import { Cart } from 'components/Cart'
import { Header } from 'components/Header'
import { AppProps } from 'next/app'
import { globalStyles } from 'styles/global'
import { Container } from 'styles/pages/app'
import { CartProvider } from 'use-shopping-cart'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY}
      successUrl={`${process.env.NEXT_PUBLIC_URL}/success`}
      cancelUrl={process.env.NEXT_PUBLIC_URL}
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
