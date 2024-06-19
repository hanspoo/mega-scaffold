'use client';
import { currencyFormatter, numberFormatter } from '../utils/Formatters';
import { CartItemList } from './CartItemList';
import { Cart } from '@coba/api-interfaces';

export function CartTable({ cart }: { cart: Cart }) {
  const [cantidadTotal, valorTotal] = cart!.items.reduce(
    (acc, item) => {
      acc[0] = acc[0] + item.quantity;
      acc[1] = acc[1] + item.value * item.quantity;
      return acc;
    },
    [0, 0]
  );

  if (cart.items.length === 0) return null;

  return (
    <table className="mb-5">
      <thead>
        <tr>
          <th className="w-[60%] p-1">Producto</th>
          <th className="w-[10%] p-1">Cant</th>
          <th className="w-[20%] p-1">Valor</th>
          <th className="w-[20%] p-1">Total</th>
          <th className="w-[10%] p-1">Opc</th>
        </tr>
      </thead>
      <tbody>
        {cart.items.map((item, i) => (
          <CartItemList item={item} key={i} i={i} />
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td className="p-1">Total</td>
          <td className="p-1 text-right">
            {numberFormatter.format(cantidadTotal)}
          </td>
          <td className="p-1 text-right">
            {currencyFormatter.format(valorTotal)}
          </td>
          <td className="p-1"></td>
        </tr>
      </tfoot>
    </table>
  );
}
