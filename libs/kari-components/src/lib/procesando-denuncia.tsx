import { useEffect, useState } from 'react';
import axios from 'axios';

import { CrearDenunciaRequest, Denuncia } from '@coba/api-interfaces';
import { Loading } from './util/loading';

type ProcesandoPedidoProps = {
  datosDenuncia: CrearDenunciaRequest;
  onSuccess: (denuncia: Denuncia) => void;
  onError: (s: string) => void;
};

export function ProcesandoDenuncia({
  datosDenuncia,
  onSuccess,
  onError,
}: ProcesandoPedidoProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .post<Denuncia>(`/api/denuncias`, { datosDenuncia })
      .then((response: any) => {
        setLoading(false);
        onSuccess(response.data);
      })
      .catch((error) => {
        onError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="mb-4">
        <Loading />
      </div>
    );

  return null;
}
