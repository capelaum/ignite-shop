import axios from 'axios'
import { X } from 'phosphor-react'
import { useState } from 'react'
import Stripe from 'stripe'
import { useShoppingCart } from 'use-shopping-cart'
import { CartEntry } from './CartEntry'
import {
  CartContainer,
  CartContentContainer,
  CartEntriesContainer,
  CartFooter,
  CloseButtonContainer,
} from './styles'

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  const {
    removeItem,
    cartDetails,
    redirectToCheckout,
    formattedTotalPrice,
    cartCount,
    handleCloseCart,
    shouldDisplayCart,
  } = useShoppingCart()

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)

      const { data: checkoutSession }: { data: Stripe.Checkout.Session } =
        await axios.post('/api/checkout', {
          cartDetails,
        })

      const result = await redirectToCheckout(checkoutSession.id)

      if (result?.error) {
        console.error(result)
        return
      }
    } catch (error) {
      console.error('error', error)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar para o checkout')
    }
  }

  const cartEntries = Object.values(cartDetails ?? {}).map((entry) => (
    <CartEntry key={entry.id} entry={entry} removeItem={removeItem} />
  ))

  return (
    <CartContainer
      css={{
        transform:
          shouldDisplayCart && cartCount > 0
            ? 'translateX(0)'
            : 'translateX(100%)',
      }}
    >
      <CartContentContainer>
        <CloseButtonContainer>
          <button
            onClick={() => {
              handleCloseCart()
            }}
          >
            <X size={32} />
          </button>
        </CloseButtonContainer>

        <h2>Sacola de Compras</h2>

        <CartEntriesContainer>
          {cartEntries.length > 0 ? cartEntries : null}
        </CartEntriesContainer>

        <CartFooter>
          <div>
            <p>Quantidade</p>
            <p>{cartCount} itens</p>
          </div>

          <div>
            <strong>Valor total</strong>
            <strong>{formattedTotalPrice}</strong>
          </div>

          <button disabled={isCreatingCheckoutSession} onClick={handleCheckout}>
            Finalizar compra
          </button>
        </CartFooter>
      </CartContentContainer>
    </CartContainer>
  )
}
