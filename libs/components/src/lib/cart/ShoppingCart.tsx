'use client';
import { RootState } from '@coba/redux-store';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { CartComponent } from './CartComponent';

export function ShoppingCart() {
  const [openCart, setOpenCart] = useState(false);
  const cart = useSelector((state: RootState) => state.cartSlice);
  return (
    <div
      className="relative flex mr-2 cursor-pointer"
      onClick={() => setOpenCart(true)}
    >
      <ShoppingCartIcon className="w-6 text-white mr-2"></ShoppingCartIcon>
      <div className="badge badge-success badge-sm absolute left-3 top-4">
        {cart.cart?.items.length}
      </div>
      {openCart && <CartComponent />}
    </div>
  );
}
