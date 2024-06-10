import { Cart, ContactInfo } from '@coba/api-interfaces';
import { postgresDataSource } from './postgresDataSource';
import { PedidoEntity } from './entities/PedidoEntity.entity';
import { CartItemEntity } from './entities/CartItemEntity.entity';

export class ServicioPedidos {
  async crearPedido(): Promise<PedidoEntity> {
    const repoSol = postgresDataSource.getRepository(PedidoEntity);
    const repoItem = postgresDataSource.getRepository(CartItemEntity);

    const { name, phone, coments, email } = this.contact;

    const ped = repoSol.create({
      createdAt: new Date().getTime(),
      estado: 'pendiente',
      name,
      phone,
      coments,
      email,
      items: [],
    });
    ped.items = this.cart.items.map(({ id, name, quantity, value }) =>
      repoItem.create({
        idItem: id,
        name,
        quantity,
        value,
      })
    );

    return repoSol.save(ped);
  }
  constructor(public cart: Cart, public contact: ContactInfo) {}
}
