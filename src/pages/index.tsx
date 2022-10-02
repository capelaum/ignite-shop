import { Product } from 'components/Product'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import GithubCorner from 'react-github-corner'
import { stripe } from 'services/stripe'
import Stripe from 'stripe'
import { HomeContainer, SliderArrow, SliderContainer } from 'styles/pages/home'

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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)

  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slides: {
      perView: 3,
      spacing: 48,
    },
    breakpoints: {
      '(max-width: 1180px)': {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },
      '(max-width: 768px)': {
        slides: {
          perView: 1,
          spacing: 48,
        },
      },
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer>
        <SliderContainer ref={sliderRef} className="keen-slider">
          <SliderArrow
            css={{
              left: 0,
              background:
                'linear-gradient(90deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)',
            }}
            onClick={(e) => instanceRef.current?.prev()}
            disabled={currentSlide === 0}
          >
            <CaretLeft size={48} />
          </SliderArrow>

          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}

          {loaded && instanceRef.current && (
            <SliderArrow
              css={{
                right: 0,
                background:
                  'linear-gradient(90deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.5) 100%)',
              }}
              onClick={(e) => instanceRef.current?.next()}
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length -
                  (
                    instanceRef.current.options.slides as {
                      perView?: number
                    }
                  ).perView
              }
            >
              <CaretRight size={48} />
            </SliderArrow>
          )}
        </SliderContainer>
      </HomeContainer>

      <GithubCorner
        href="https://github.com/capelaum"
        bannerColor="#7465d4"
        octoColor="#121214"
        size={60}
        direction="left"
        target="_blank"
        title="capelaum's Github"
      />
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
