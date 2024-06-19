import { EmailComprador } from './EmailComprador';
describe('enviar mails con resend', () => {
  it('enviar mail de prueba', async () => {
    const service = new EmailComprador();
    const response = await service.send();
    console.log(response);
  });
});
