import { CrearDenunciaRequest } from '@coba/api-interfaces';
import { ServicioDenunciasPrisma } from '@coba/dao-prisma';
import { DenunciaMailerService } from '@coba/services';

export default async function handler(req: any, res: any) {
  const data: CrearDenunciaRequest = req.body;

  //if (!postgresDataSource.isInitialized) await postgresDataSource.initialize();
  const servicio = new ServicioDenunciasPrisma(data);
  const denuncia = await servicio.crearDenuncia();
  const mailer = new DenunciaMailerService(denuncia);
  await mailer.notificarComprador();
  // await mailer.notificarVendedor();

  res.status(200).json(denuncia);
}
