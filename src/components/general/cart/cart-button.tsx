// components/cart-button.tsx
'use client'

import { ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'

import { Badge } from '@/components/ui/badge'
import { useCart } from '../../../../context/cart-content'

export const CartButton = () => {
  const { cart } = useCart()
  const itemCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  return (
    <Button variant="ghost" className="relative" aria-label="Cart">
      <ShoppingCart className="w-5 h-5" />
      {itemCount > 0 && (
        <Badge className="absolute -top-2 -right-2 text-xs px-1.5 py-0.5 rounded-full">
          {itemCount}
        </Badge>
      )}
    </Button>
  )
}
