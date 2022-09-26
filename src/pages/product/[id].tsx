import { GetStaticProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { stripe } from 'services/stripe'
import Stripe from 'stripe'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from 'styles/pages/product'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'

interface ProductProps {
  product: {
    id: string
    name: string
    description: string
    image: string
    price: number
    price_id: string
    currency: string
  }
}

export default function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart()
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Carregando...</p>
  }

  return (
    <>
      <Head>
        <title>{`${product.name} | Ignite Shop`}</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image
            width={520}
            height={480}
            src={product.image}
            alt={product.name}
          />
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>
            {formatCurrencyString({
              value: product.price,
              currency: product.currency,
            })}
          </span>

          <p>{product.description}</p>

          <button onClick={() => addItem(product)}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'prod_MRiJo7sxZtNLA4',
        },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        description: product.description,
        image: product.images[0],
        price: price.unit_amount,
        currency: price.currency,
        price_id: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hour
  }
}
