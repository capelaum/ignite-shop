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
import { useShoppingCart } from 'use-shopping-cart'

interface HomeProps {
  products: {
    id: string
    name: string
    price: string
    imageUrl: string
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
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt={product.name}
              />
            </Link>
            <ProductFooter>
              <ProductInfo>
                <strong>{product.name}</strong>
                <span>{product.price}</span>
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
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
      sku: price.product as string,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 hours
  }
}
