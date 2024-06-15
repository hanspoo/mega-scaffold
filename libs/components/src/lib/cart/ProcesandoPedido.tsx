import { useEffect, useState } from 'react';
import axios from 'axios';

import { Cart, ContactInfo } from '@coba/api-interfaces';
import { Spinner } from '../utils/Spinner';

type ProcesandoPedidoProps = {
  cart: Cart;
  contact: ContactInfo;
  onSuccess: () => void;
};

export function ProcesandoPedido({
  cart,
  contact,
  onSuccess,
}: ProcesandoPedidoProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    axios
      .post(`/api/pedidos`, { cart, contact })
      .then((response) => {
        setLoading(false);
        onSuccess();
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="mb-4">
        <Spinner />
      </div>
    );
  if (error) return <div className="text-error mb-4">{error}</div>;

  return null;
}
