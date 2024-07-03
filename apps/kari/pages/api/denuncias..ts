import { DenunciasFinder } from '@coba/dao-prisma';

export default async function handler(req: any, res: any) {
  const dao = new DenunciasFinder();
  const denuncias = await dao.findAll();

  res.status(200).json(denuncias);
}
