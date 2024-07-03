import { CrearArticleRequest, Article } from '@mega-scaffold/api-interfaces';
import { PrismaClient } from '@prisma/client';

export class ServicioNuevasArticles {
  async crearArticle(): Promise<Article> {
    const { name, phone, coments, email } = this.data;

    const prisma = new PrismaClient();

    const ped = await prisma.dAOArticle.create({
      data: {
        createdAt: new Date(),
        estado: 'pendiente',
        name,
        phone,
        coments,
        email,
      },
    });

    const articlex = await prisma.dAOArticle.findFirstOrThrow({
      where: {
        id: ped.id,
      },
      include: {
        items: true,
      },
    });

    return articlex as any as Article;
  }
  constructor(public data: CrearArticleRequest) {}
}
