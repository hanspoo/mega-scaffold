import { Denuncia } from '@coba/api-interfaces';
import { EmailDenunciante } from './EmailDenunciante';

export class DenunciaMailerService {
  constructor(public denuncia: Denuncia) {}

  async notificarComprador() {
    const service = new EmailDenunciante(this.denuncia);
    service.send();
  }
}
