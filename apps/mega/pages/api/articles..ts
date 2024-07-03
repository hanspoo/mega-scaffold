import { ArticlesFinder } from '@mega-scaffold/dao-prisma';

export default async function handler(req: any, res: any) {
  const dao = new ArticlesFinder();
  const articles = await dao.findAll();

  res.status(200).json(articles);
}
