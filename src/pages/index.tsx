import { useKeenSlider } from 'keen-slider/react'
import Head from 'next/head'
import Image from 'next/image'
import { HomeContainer, Product } from 'styles/pages/home'

import shirt_1 from 'assets/shirt_1.png'
import shirt_2 from 'assets/shirt_2.png'
import shirt_3 from 'assets/shirt_3.png'
import shirt_4 from 'assets/shirt_4.png'

import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        <Product className="keen-slider__slide">
          <Image src={shirt_1} width={520} height={480} alt="Camiseta 1" />

          <footer>
            <strong>Camiseta 1</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={shirt_2} width={520} height={480} alt="Camiseta 2" />

          <footer>
            <strong>Camiseta 1</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={shirt_3} width={520} height={480} alt="Camiseta 3" />

          <footer>
            <strong>Camiseta 1</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={shirt_4} width={520} height={480} alt="Camiseta 4" />

          <footer>
            <strong>Camiseta 1</strong>
            <span>R$ 79,90</span>
          </footer>
        </Product>
      </HomeContainer>
    </>
  )
}
