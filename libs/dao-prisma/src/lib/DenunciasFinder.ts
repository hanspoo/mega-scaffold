import { Denuncia } from '@coba/api-interfaces';
import { DAODenuncia, PrismaClient } from '@prisma/client';

export class DenunciasFinder {
  async findAll(): Promise<Denuncia[]> {
    const prisma = new PrismaClient();

    const denuncias = await prisma.dAODenuncia.findMany();
    return denuncias.map((d) => prismaToModel(d));
  }
}

function prismaToModel(dao: DAODenuncia): Denuncia {
  const d: Denuncia = {
    name: dao.name,
    coments: dao.coments || '',
    phone: dao.phone,
    email: dao.email,
  };
  return d;
}
