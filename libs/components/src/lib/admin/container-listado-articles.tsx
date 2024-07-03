import { useEffect, useState } from 'react';

import axios from 'axios';
import { Article } from '@mega-scaffold/api-interfaces';

import { ListadoArticles } from './listado-articles';
import { Loading } from '../util/loading';

export function ContainerListadoArticles() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [data, setData] = useState<Article[]>();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`/api/articles`)
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

  return <ListadoArticles articles={data} />;
}
