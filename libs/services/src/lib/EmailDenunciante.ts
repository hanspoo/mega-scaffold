import { Resend } from 'resend';

import { render } from '@react-email/render';

import { Denuncia } from '@coba/api-interfaces';
import { CorreoDenunciante } from '@coba/components';

const resend = new Resend(process.env.RESEND_API_KEY);

export class EmailDenunciante {
  constructor(public denuncia: Denuncia) {}
  async send(): Promise<any> {
    return resend.emails.send({
      from: process.env.RESEND_FROM || 'onboarding@resend.dev',
      to: this.denuncia.email,
      subject: `Tu denuncia en komplaints`,
      html: render(CorreoDenunciante({ denuncia: this.denuncia })),
    });
  }
}
