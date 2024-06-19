import { Pedido } from '@coba/api-interfaces';
import { NodeMailer } from '@coba/mail-utils';
import { EmailComprador } from './EmailComprador';

export class PedidoMailerService {
  mailer: NodeMailer = new NodeMailer();
  constructor(public pedido: Pedido) {}

  async notificarComprador() {
    const service = new EmailComprador(this.pedido);
    service.send();
  }
}
