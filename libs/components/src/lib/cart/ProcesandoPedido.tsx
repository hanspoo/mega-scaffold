import { useEffect, useState } from 'react';
import axios from 'axios';

import { Cart, ContactInfo } from '@coba/api-interfaces';
import { Spinner } from '../utils/Spinner';

type ProcesandoPedidoProps = {
  cart: Cart;
  contact: ContactInfo;
  onSuccess: () => void;
  onError: (s: string) => void;
};

export function ProcesandoPedido({
  cart,
  contact,
  onSuccess,
  onError,
}: ProcesandoPedidoProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .post(`/api/pedidos`, { cart, contact })
      .then((response) => {
        setLoading(false);
        onSuccess();
      })
      .catch((error) => {
        onError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="mb-4">
        <Spinner />
      </div>
    );

  return null;
}
