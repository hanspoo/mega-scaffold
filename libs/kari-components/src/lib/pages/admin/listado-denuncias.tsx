import { WithClassName } from '@coba/components';
import { ShieldCheckIcon } from '@heroicons/react/24/solid';

export function ListadoDenuncias({ className = '' }: WithClassName) {
  return (
    <div className={`overflow-x-auto ${className}`}>
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
          {/* row 1 */}
          <tr>
            <td>
              <div className="flex">
                <ShieldCheckIcon className="w-6 mr-2" />
                El manager es hermano del proveedor
              </div>
            </td>
            <td className="hidden md:table-cell">Zapallar</td>
            <td className="hidden md:table-cell">2024-07-01</td>
            <td>Derivada Juan Pérez</td>
          </tr>
          <tr>
            <td>
              <div className="flex">
                <ShieldCheckIcon className="w-6 mr-2" />
                El manager es hermano del proveedor
              </div>
            </td>
            <td className="hidden md:table-cell">Zapallar</td>
            <td className="hidden md:table-cell">2024-07-01</td>
            <td>Derivada Juan Pérez</td>
          </tr>
          <tr>
            <td>
              <div className="flex">
                <ShieldCheckIcon className="w-6 mr-2" />
                El manager es hermano del proveedor
              </div>
            </td>
            <td className="hidden md:table-cell">Zapallar</td>
            <td className="hidden md:table-cell">2024-07-01</td>
            <td>Derivada Juan Pérez</td>
          </tr>
          <tr>
            <td>
              <div className="flex">
                <ShieldCheckIcon className="w-6 mr-2" />
                El manager es hermano del proveedor
              </div>
            </td>
            <td className="hidden md:table-cell">Zapallar</td>
            <td className="hidden md:table-cell">2024-07-01</td>
            <td>Derivada Juan Pérez</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
