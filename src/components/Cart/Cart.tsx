import { X } from 'phosphor-react'
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
  const cart = useShoppingCart()
  const {
    removeItem,
    cartDetails,
    clearCart,
    formattedTotalPrice,
    cartCount,
    handleCloseCart,
    shouldDisplayCart,
  } = cart

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

          <button onClick={() => console.log('handle checkout')}>
            Finalizar compra
          </button>
        </CartFooter>
      </CartContentContainer>
    </CartContainer>
  )
}
