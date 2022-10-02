import Image from 'next/future/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { formatCurrencyString, useShoppingCart } from 'use-shopping-cart'
import { ProductContainer, ProductFooter, ProductInfo } from './styles'

interface ProductProps {
  product: {
    id: string
    name: string
    image: string
    price: number
    price_id: string
    currency: string
  }
}

export function Product({ product }: ProductProps) {
  const { addItem } = useShoppingCart()

  return (
    <ProductContainer key={product.id} className="keen-slider__slide">
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
    </ProductContainer>
  )
}
