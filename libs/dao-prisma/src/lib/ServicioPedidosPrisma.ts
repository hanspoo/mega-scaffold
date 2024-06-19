import { Cart, ContactInfo, Pedido } from '@coba/api-interfaces';
import { PrismaClient } from '@prisma/client';
import { Prisma } from '.prisma/client/index.d';

export class ServicioPedidosPrisma {
  async crearPedido(): Promise<Pedido> {
    const { name, phone, coments, email } = this.contact;

    const prisma = new PrismaClient();

    const items: any = this.cart.items.map((item) => {
      const it = {
        idItem: item.id,
        name: item.name,
        quantity: item.quantity,
        value: item.value,
      };
      return it;
    });

    const ped = await prisma.dAOPedido.create({
      data: {
        createdAt: new Date(),
        estado: 'pendiente',
        name,
        phone,
        coments,
        email,
        items: {
          create: items,
        },
      },
    });

    const pedidox = await prisma.dAOPedido.findFirstOrThrow({
      where: {
        id: ped.id,
      },
      include: {
        items: true,
      },
    });

    return pedidox as any as Pedido;
  }
  constructor(public cart: Cart, public contact: ContactInfo) {}
}
