import { useEffect, useState } from 'react';
import axios from 'axios';

import { Cart } from '@coba/api-interfaces';
import { Spinner } from '../utils/Spinner';
import { ContactInfo } from '../../../../api-interfaces/src/lib/pedidos/ContactInfo';

type ProcesandoPedidoProps = {
  cart: Cart;
  contact: ContactInfo;
};

export function ProcesandoPedido({ cart, contact }: ProcesandoPedidoProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState();

  useEffect(() => {
    setLoading(true);
    axios
      .post(`/api/pedidos`, { cart, contact })
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <Spinner />;
  if (error) return <p>{error}</p>;

  if (!data) return <p>Error interno</p>;

  return <p>Bingo</p>;
}
