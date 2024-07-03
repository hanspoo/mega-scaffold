import { Resend } from 'resend';

import { render } from '@react-email/render';

import { Article } from '@mega-scaffold/api-interfaces';
import { CorreoArticlente } from '@mega-scaffold/components';

const resend = new Resend(process.env.RESEND_API_KEY);

export class EmailArticlente {
  constructor(public article: Article) {}
  async send(): Promise<any> {
    return resend.emails.send({
      from: process.env.RESEND_FROM || 'onboarding@resend.dev',
      to: this.article.email,
      subject: `Tu article en komplaints`,
      html: render(CorreoArticlente({ article: this.article })),
    });
  }
}
