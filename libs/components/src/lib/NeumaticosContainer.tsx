'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Neumatico } from '@coba/api-interfaces';
import { Neumaticos } from './Neumaticos';

/* eslint-disable-next-line */
export interface NeumaticosContainerProps {}

export function NeumaticosContainer(props: NeumaticosContainerProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<Neumatico[]>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/neumaticos`)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(JSON.stringify(error.response.data));
        setLoading(false);
      });
  }, []);

  if (loading) return <p>cargando...</p>;
  if (error) return <p>{error}</p>;

  if (!data) return <p>Error interno</p>;

  return <Neumaticos neumaticos={data} />;
}
