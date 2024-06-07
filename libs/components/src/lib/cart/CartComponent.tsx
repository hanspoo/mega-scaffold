import { CartItem } from '@coba/api-interfaces';
import { emptyCart, RootState } from '@coba/redux-store';
import { useDispatch, useSelector } from 'react-redux';

export function CartComponent({ cerrar }: { cerrar: () => void }) {
  const { cart } = useSelector((state: RootState) => state.cartSlice);
  const dispatch = useDispatch();

  const vaciar = () => {
    dispatch(emptyCart());
  };
  return (
    <div className="bg-sky-500 text-black border-2 shadow-lg -z-1000 p-4 min-h-80 min-w-60 absolute top-8 -right-10 rounded-sm">
      <h2 className="text-2xl mb-2">Shopping Cart</h2>
      {cart!.items.length === 0 && <p>No hay productos</p>}
      {cart && (
        <table>
          {cart.items.map((item) => (
            <CartItemList item={item} />
          ))}
        </table>
      )}
      <div className="mt-3">
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

function CartItemList({ item }: { item: CartItem }) {
  return (
    <tr>
      <td style={{ width: '80%' }}>{item.name}</td>
      <td style={{ width: '10%' }}>{item.quantity}</td>
      <td style={{ width: '10%' }}>{item.value}</td>
    </tr>
  );
}
