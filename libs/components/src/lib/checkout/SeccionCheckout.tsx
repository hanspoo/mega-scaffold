'use client';
import { useSelector } from 'react-redux';
import { FormPresupuesto } from '../cart/FormPresupuesto';
import { RootState } from '@coba/redux-store';

export function SeccionCheckout() {
  const cart = useSelector((state: RootState) => state.shoppingCart.cart);
  if (!cart) return <p>No hay cart</p>;

  return <FormPresupuesto cart={cart} />;
}
