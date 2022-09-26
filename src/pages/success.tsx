import { GetServerSideProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { stripe } from 'services/stripe'
import Stripe from 'stripe'
import {
  ImageContainer,
  ProductsContainer,
  SuccessContainer,
} from 'styles/pages/success'
import { useShoppingCart } from 'use-shopping-cart'

interface SuccessProps {
  customerName: string
  products: {
    id: string
    name: string
    image: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  const { clearCart, cartCount } = useShoppingCart()

  if (cartCount > 0) {
    clearCart()
  }

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
        <title>Compra efetuada | Ignite Shop</title>
      </Head>
      <SuccessContainer>
        <ProductsContainer css={{ width: 70 * (products.length + 1) }}>
          {products.map((product, index) => (
            <ImageContainer
              key={product.id}
              css={{
                left: index * 70,
              }}
            >
              <Image
                src={product.image}
                width={120}
                height={110}
                alt={product.name}
              />
            </ImageContainer>
          ))}
        </ProductsContainer>

        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          <strong>{products.length}</strong> camisetas já esta a caminho de sua
          casa!
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details?.name

  const products = session.line_items.data.map((lineItem: Stripe.LineItem) => {
    const product = lineItem.price.product as Stripe.Product

    return {
      id: product.id,
      name: product.name,
      image: product.images[0],
    }
  })

  return {
    props: {
      customerName,
      products,
    },
  }
}
