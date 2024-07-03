import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import { Denuncia } from '@coba/api-interfaces';

type ListadoDenunciasProps = {
  denuncias: Denuncia[];
};

export function ListadoDenuncias({ denuncias }: ListadoDenunciasProps) {
  return (
    <div className={`overflow-x-auto`}>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Denuncia</th>
            <th className="hidden md:table-cell">Sucursal</th>
            <th className="hidden md:table-cell">Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {denuncias.map((row) => (
            <FilaDenuncia denuncia={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FilaDenuncia({ denuncia }: { denuncia: Denuncia }) {
  const { coments, email, name, phone } = denuncia;

  return (
    <tr>
      <td>
        <div className="flex">
          <ShieldCheckIcon className="w-6 mr-2" />
          {coments}
        </div>
      </td>
      <td className="hidden md:table-cell">{name}</td>
      <td className="hidden md:table-cell">{email}</td>
      <td>Derivada Juan Pérez</td>
    </tr>
  );
}
