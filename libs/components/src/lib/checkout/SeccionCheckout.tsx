'use client';
import { useSelector } from 'react-redux';
import { FormPresupuesto } from '../cart/FormPresupuesto';
import { RootState } from '@coba/redux-store';
import { CartTable } from '../cart/CartTable';

export function SeccionCheckout() {
  const cart = useSelector((state: RootState) => state.shoppingCart.cart);
  if (!cart) return null;

  return (
    <div className="my-6 m-4">
      <CartTable cart={cart} />
      <FormPresupuesto cart={cart} />
    </div>
  );
}
