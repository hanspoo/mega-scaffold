import { Resend } from 'resend';

import { render } from '@react-email/render';
import { CorreoComprador } from '@coba/components';
import { Pedido } from '@coba/api-interfaces';

const resend = new Resend('re_Lq9sXJ9x_MGR7EY2oC1ToxPkqH393ZHDG');

export class EmailComprador {
  constructor(public pedido: Pedido) {}
  async send(): Promise<any> {
    return resend.emails.send({
      from: 'onboarding@resend.dev',
      to: this.pedido.email,
      subject: `Tu Pédido de Neumáticos en ZonaCoba`,
      html: render(CorreoComprador({ pedido: this.pedido })),
    });
  }
}
