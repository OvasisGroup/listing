"use client";

import {
    Sheet,
    SheetTrigger,
    SheetContent,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { useCart } from '../../../../context/cart-content';
import { CartButton } from './cart-button';

export const CartDrawer = () => {
    const { cart } = useCart();

    return (
        <Sheet>
            <SheetTrigger asChild>
                <CartButton />
            </SheetTrigger>
            <SheetContent side="right">
                <SheetHeader>
                    <SheetTitle>Cart</SheetTitle>
                </SheetHeader>
                <div className="mt-4 space-y-2">
                    {cart.length === 0 && <p className="text-sm text-gray-500">Cart is empty.</p>}
                    {cart.map((item) => (
                        <div key={item.id} className="flex justify-between">
                            <span>{item.name}</span>
                            <span>x{item.quantity}</span>
                        </div>
                    ))}
                </div>
            </SheetContent>
        </Sheet>
    );
};
