import { Resend } from 'resend';

import { render } from '@react-email/render';
import { CorreoDenunciante } from '@coba/components';
import { Denuncia } from '@coba/api-interfaces';

const resend = new Resend('re_Lq9sXJ9x_MGR7EY2oC1ToxPkqH393ZHDG');

export class EmailDenunciante {
  constructor(public denuncia: Denuncia) {}
  async send(): Promise<any> {
    return resend.emails.send({
      from: 'onboarding@resend.dev',
      to: this.denuncia.email,
      subject: `Tu Pédido de Neumáticos en ZonaCoba`,
      html: render(CorreoDenunciante({ denuncia: this.denuncia })),
    });
  }
}
