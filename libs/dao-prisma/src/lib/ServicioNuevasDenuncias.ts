import { CrearDenunciaRequest, Denuncia } from '@coba/api-interfaces';
import { PrismaClient } from '@prisma/client';

export class ServicioNuevasDenuncias {
  async crearDenuncia(): Promise<Denuncia> {
    const { name, phone, coments, email } = this.data;

    const prisma = new PrismaClient();

    const ped = await prisma.dAODenuncia.create({
      data: {
        createdAt: new Date(),
        estado: 'pendiente',
        name,
        phone,
        coments,
        email,
      },
    });

    const denunciax = await prisma.dAODenuncia.findFirstOrThrow({
      where: {
        id: ped.id,
      },
      include: {
        items: true,
      },
    });

    return denunciax as any as Denuncia;
  }
  constructor(public data: CrearDenunciaRequest) {}
}
