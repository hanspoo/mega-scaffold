import { filtrarAro } from '@coba/api-interfaces';
import { DAONeumaticos } from './DAONeumaticos';
describe('database', () => {
  it('carga los nuematicos desde csv', () => {
    const dao = new DAONeumaticos().loadFromCSV(
      'apps/coba/src/app/inventario.csv'
    );
    const neumaticos = dao.neumaticos();

    expect(neumaticos.length).toBe(49);
  });

  it('filtro de aros, sólo 1 r12', () => {
    const dao = new DAONeumaticos().loadFromCSV(
      'apps/coba/src/app/inventario.csv'
    );
    const neumaticos = dao.neumaticos();

    const filtrados = filtrarAro(neumaticos, 'r12');
    expect(filtrados.length).toBe(1);
  });
});
