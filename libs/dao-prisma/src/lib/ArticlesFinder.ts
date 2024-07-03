import { Article } from '@mega-scaffold/api-interfaces';
import { DAOArticle, PrismaClient } from '@prisma/client';

export class ArticlesFinder {
  async findAll(): Promise<Article[]> {
    const prisma = new PrismaClient();

    const articles = await prisma.dAOArticle.findMany();
    return articles.map((d) => prismaToModel(d));
  }
}

function prismaToModel(dao: DAOArticle): Article {
  const d: Article = {
    name: dao.name,
    coments: dao.coments || '',
    phone: dao.phone,
    email: dao.email,
  };
  return d;
}
