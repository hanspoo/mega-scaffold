import { PedidoRequest } from '@coba/api-interfaces';
import { ServicioPedidosPrisma } from '@coba/dao-prisma';
import { PedidoMailerService } from '@coba/services';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { cart, contact } = (await request.json()) as PedidoRequest;

  if (contact.name === 'borrame') return NextResponse.error();

  //if (!postgresDataSource.isInitialized) await postgresDataSource.initialize();
  const servicio = new ServicioPedidosPrisma(cart, contact);
  const pedido = await servicio.crearPedido();
  const mailer = new PedidoMailerService(pedido);
  await mailer.notificarComprador();
  // await mailer.notificarVendedor();

  return NextResponse.json(pedido, { status: 200 });
}
