import { Cart, CartItem } from '@coba/api-interfaces';
import { clearCart } from '@coba/redux-store';
import { useDispatch } from 'react-redux';

type CartComponentProps = {
  cerrar: () => void;
  cart: Cart;
};

export function CartComponent({ cerrar, cart }: CartComponentProps) {
  const dispatch = useDispatch();

  const vaciar = () => {
    dispatch(clearCart() as any);
  };
  return (
    <div className="bg-sky-100 text-black border-2 shadow-lg z-[1000] p-4 min-h-80 min-w-80 absolute top-8 -right-10 rounded-sm">
      <h2 className="text-2xl mb-2">Shopping Cart</h2>
      {cart!.items.length === 0 && <p>No hay productos</p>}
      {cart && (
        <table className="mb-20">
          <tbody>
            {cart.items.map((item, i) => (
              <CartItemList item={item} key={i} />
            ))}
          </tbody>
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

function CartItemList({ item }: { item: CartItem }) {
  return (
    <tr>
      <td style={{ width: '80%' }}>{item.name}</td>
      <td style={{ width: '10%' }}>{item.quantity}</td>
      <td style={{ width: '10%' }}>{item.value}</td>
    </tr>
  );
}
