import { PedidoRequest } from '@coba/api-interfaces';
import { ServicioPedidos, postgresDataSource } from '@coba/database';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { cart, contact } = (await request.json()) as PedidoRequest;
  console.log(' XXXXXXXXXXXXXXXXX');

  if (!postgresDataSource.isInitialized) await postgresDataSource.initialize();
  console.log('YYYYYYYYYYYYYYYYYYYY');
  const servicio = new ServicioPedidos(cart, contact);
  console.log('ZZZZZZZZZZZZZZZZZZZ');
  const pedido = await servicio.crearPedido();
  console.log('AAAAAAAAAAAAAAAAAAA');

  return NextResponse.json(pedido, { status: 200 });
}
