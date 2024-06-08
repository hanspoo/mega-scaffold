'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { Cart } from '@coba/api-interfaces';
import { ShoppingCartContainer } from './ShoppingCartContainer';
import { CartComponent } from './CartComponent';

type ShoppingCartProps = {
  cart: Cart;
};

export function ShoppingCartAccess({ cart }: ShoppingCartProps) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className="relative flex mr-2 cursor-pointer">
      <button onClick={() => setAbierto(true)}>
        <ShoppingCartIcon className="w-6 text-white mr-2"></ShoppingCartIcon>
        <div className="badge badge-success badge-sm absolute left-3 top-4">
          {cart?.items.length}
        </div>
      </button>
      {abierto && (
        <CartComponent cerrar={() => setAbierto(false)} cart={cart} />
      )}
    </div>
  );
}
