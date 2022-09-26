import { NextApiRequest, NextApiResponse } from 'next'
import { stripe } from 'services/stripe'
import { CartEntry } from 'use-shopping-cart/core'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method not allowed.')
  }

  const { cartDetails } = req.body

  if (!cartDetails) {
    return res.status(400).json({ error: 'Cart is undefined.' })
  }

  const successUrl = `${process.env.NEXT_PUBLIC_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = process.env.NEXT_PUBLIC_URL

  const lineItems = Object.values(cartDetails ?? {}).map((item: CartEntry) => ({
    price_data: {
      currency: item.currency,
      product_data: {
        name: item.name,
        images: [item.image],
      },
      unit_amount: item.price,
    },
    quantity: item.quantity,
  }))

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',

    line_items: lineItems,
  })

  return res.status(201).json(checkoutSession)
}
