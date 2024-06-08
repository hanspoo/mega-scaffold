'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';
import { CartComponent } from './CartComponent';
import { RootState } from '@coba/redux-store';
import { useSelector } from 'react-redux';
import { Spinner } from '../utils/Spinner';

export function ShoppingCartAccess() {
  const [abierto, setAbierto] = useState(false);

  const { cart, error, status } = useSelector(
    (state: RootState) => state.shoppingCart
  );

  if (status === 'idle') return <Spinner title="?" />;
  if (status === 'rejected')
    return <Spinner className="error-text" title={error} />;
  if (status === 'pending') return <Spinner title="pending" />;

  if (!cart) return <div>Error</div>;

  return (
    <div className="relative flex mr-2 cursor-pointer">
      <button onClick={() => setAbierto(!abierto)}>
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
