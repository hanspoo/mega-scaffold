import { Denuncia, Item } from '@coba/api-interfaces';

export function CorreoDenunciante({ denuncia }: { denuncia: Denuncia }) {
  return (
    <>
      <p>Hola {denuncia.name}</p>
      <p>Hemos recibido tu denuncia</p>
      <p>El detalle es el siguiente:</p>

      <p>{denuncia.name}</p>
      <p>{denuncia.email}</p>
      <p>{denuncia.coments}</p>
      <p>{denuncia.phone}</p>

      <p>Tomaremos las acciones para atenderla...</p>
      <p>
        Gracias,
        <br />
        Atte, Recursos Humanos Stargate
      </p>
    </>
  );
}
