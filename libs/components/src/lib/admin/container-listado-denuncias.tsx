import { useEffect, useState } from 'react';

import axios from 'axios';
import { Denuncia } from '@coba/api-interfaces';

import { ListadoDenuncias } from './listado-denuncias';
import { Loading } from '../util/loading';

export function ContainerListadoDenuncias() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<Denuncia[]>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/denuncias`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(JSON.stringify(error.response.data));
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <p>{error}</p>;

  if (!data) return <p>Error interno</p>;

  return <ListadoDenuncias denuncias={data} />;
}
