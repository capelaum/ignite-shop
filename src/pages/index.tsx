import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/future/image'
import Head from 'next/head'
import {
  HomeContainer,
  Product,
  ProductFooter,
  ProductInfo,
} from 'styles/pages/home'

import 'keen-slider/keen-slider.min.css'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { stripe } from 'services/stripe'
import Stripe from 'stripe'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'

interface HomeProps {
  products: {
    id: string
    name: string
    image: string
    price: number
    price_id: string
    currency: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const { addItem } = useShoppingCart()

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Product key={product.id} className="keen-slider__slide">
            <Link href={`/product/${product.id}`} prefetch={false} passHref>
              <a>
                <Image
                  src={product.image}
                  width={520}
                  height={480}
                  alt={product.name}
                />
              </a>
            </Link>
            <ProductFooter>
              <ProductInfo>
                <strong>{product.name}</strong>
                <span>
                  {formatCurrencyString({
                    value: product.price,
                    currency: product.currency,
                  })}
                </span>
              </ProductInfo>

              <button
                onClick={() => addItem(product)}
                title={`Adicionar ${product.name} à sacola`}
              >
                <Handbag size={32} />
              </button>
            </ProductFooter>
          </Product>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      image: product.images[0],
      price: price.unit_amount,
      price_id: price.id,
      currency: price.currency as string,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
