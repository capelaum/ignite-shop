import Image from 'next/future/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { CartButton, HeaderContainer } from './styles'

import logo from 'assets/logo.svg'
import { useShoppingCart } from 'use-shopping-cart'

export function Header() {
  const { cartCount, handleCartClick } = useShoppingCart()

  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <a>
          <Image src={logo} alt="logo" />
        </a>
      </Link>

      <CartButton disabled={cartCount <= 0} onClick={() => handleCartClick()}>
        <Handbag size={24} />

        {cartCount > 0 && <span>{cartCount}</span>}
      </CartButton>
    </HeaderContainer>
  )
}
