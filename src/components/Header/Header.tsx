import Image from 'next/future/image'
import Link from 'next/link'
import { Handbag } from 'phosphor-react'
import { CartButton, HeaderContainer } from './styles'

import logo from 'assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/" passHref>
        <Image src={logo} alt="logo" />
      </Link>

      <CartButton>
        <Handbag size={24} color="#8D8D99" />
      </CartButton>
    </HeaderContainer>
  )
}
