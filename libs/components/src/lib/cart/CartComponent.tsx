import { Cart, CartItem } from '@coba/api-interfaces';
import { removeItem } from '@coba/redux-store';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';

type CartComponentProps = {
  cerrar: () => void;
  cart: Cart;
};

export function CartComponent({ cerrar, cart }: CartComponentProps) {
  const dispatch = useDispatch();

  const vaciar = () => {
    dispatch(removeItem('') as any);
  };

  const total = cart!.items.reduce((acc, iter) => {
    return acc + iter.value;
  }, 0);

  return (
    <div className="bg-sky-100 cursor-default text-black border-2 shadow-lg z-[1000] p-4 min-h-80 min-w-96 absolute top-8 -right-10 rounded-sm">
      <h2 className="text-2xl mb-2">Shopping Cart</h2>
      {cart!.items.length === 0 && <p>No hay productos</p>}
      {cart && (
        <table className="mb-20">
          <thead></thead>
          <tr>
            <th className="w-[60%] p-1">Producto</th>
            <th className="w-[10%] p-1">Cant</th>
            <th className="w-[20%] p-1">Valor</th>
            <th className="w-[10%] p-1">Opc</th>
          </tr>
          <tbody>
            {cart.items.map((item, i) => (
              <CartItemList item={item} key={i} i={i} />
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="p-1">Total</td>
              <td className="p-1 text-right"></td>
              <td className="p-1 text-right">
                {currencyFormatter.format(total)}
              </td>
              <td className="p-1"></td>
            </tr>
          </tfoot>
        </table>
      )}
      <div className="mt-6 absolute bottom-4">
        {cart!.items.length > 0 && (
          <button className="btn mr-1" onClick={vaciar}>
            Vaciar
          </button>
        )}
        <button className="btn" onClick={cerrar}>
          Cerrar
        </button>
      </div>
    </div>
  );
}
const currencyFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
});

function CartItemList({ item, i }: { item: CartItem; i: number }) {
  const dispatch = useDispatch();
  function removeProduct() {
    if (window.confirm('Remove the product?')) {
      dispatch(removeItem(item.id) as any);
    }
  }
  const bg = i % 2 === 0 ? 'bg-white' : '';

  return (
    <tr className={`${bg}`}>
      <td className="w-[70%] p-1">{item.name}</td>
      <td className="w-[10%] p-1 text-right">{item.quantity}</td>
      <td className="w-[20%] p-1 text-right">
        {currencyFormatter.format(item.value)}
      </td>
      <td className="p-1">
        <TrashIcon
          className="w-[16px] cursor-pointer"
          onClick={removeProduct}
        />
      </td>
    </tr>
  );
}
