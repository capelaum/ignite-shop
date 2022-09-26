import Image from 'next/future/image'
import { CartActions, CartEntry as ICartEntry } from 'use-shopping-cart/core'
import {
  CartEntryContainer,
  CartEntryDetails,
  CartEntryImageContainer,
} from './styles'

interface CartEntryProps {
  entry: ICartEntry
  removeItem: CartActions['removeItem']
}

export function CartEntry({ entry, removeItem }: CartEntryProps) {
  console.log('🚀 ~ entry', entry)

  return (
    <CartEntryContainer>
      <CartEntryImageContainer>
        <Image width={100} height={100} src={entry.imageUrl} alt={entry.name} />
      </CartEntryImageContainer>

      <CartEntryDetails>
        <h3>{entry.name}</h3>

        <p>
          {entry.quantity} x {entry.price} = {entry.formattedValue}
        </p>

        <button onClick={() => removeItem(entry.id)}>Remove</button>
      </CartEntryDetails>
    </CartEntryContainer>
  )
}
