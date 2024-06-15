import { PedidoRequest } from '@coba/api-interfaces';
import { ServicioPedidosPrisma } from '@coba/dao-prisma';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { cart, contact } = (await request.json()) as PedidoRequest;

  //if (!postgresDataSource.isInitialized) await postgresDataSource.initialize();
  const servicio = new ServicioPedidosPrisma(cart, contact);
  const pedido = await servicio.crearPedido();

  return NextResponse.json(pedido, { status: 200 });
}
