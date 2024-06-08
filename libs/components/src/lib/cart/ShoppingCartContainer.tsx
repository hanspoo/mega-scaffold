import { useEffect, useState } from 'react';
import { ShoppingCartAccess } from './ShoppingCartAccess';
import axios from 'axios';
import { Cart } from '@coba/api-interfaces';
import { Spinner } from '../utils/Spinner';
import { RootState } from '@coba/redux-store';
import { useSelector } from 'react-redux';
import { CartComponent } from './CartComponent';

export function ShoppingCartContainer() {
  const { cart, error, status } = useSelector(
    (state: RootState) => state.shoppingCart
  );

  if (status === 'idle') return <Spinner title="?" />;
  if (status === 'rejected')
    return <Spinner className="error-text" title="error" />;
  if (status === 'pending') return <Spinner title="pending" />;

  if (!cart) return <div>Error</div>;

  return <ShoppingCartAccess cart={cart} />;
}
