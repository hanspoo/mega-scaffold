import { DAONeumaticos } from '@coba/database';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const dao = new DAONeumaticos();
  dao.loadFromCSV(process.cwd() + '/src/app/inventario.csv');
  const neumaticos = dao.neumaticos();
  return NextResponse.json(neumaticos, { status: 200 });
}
