import { CrearArticleRequest } from '@mega-scaffold/api-interfaces';
import { ServicioNuevasArticles } from '@mega-scaffold/dao-prisma';
import { ArticleMailerService } from '@mega-scaffold/services';

export default async function handler(req: any, res: any) {
  const data: CrearArticleRequest = req.body;

  //if (!postgresDataSource.isInitialized) await postgresDataSource.initialize();
  const servicio = new ServicioNuevasArticles(data);
  const article = await servicio.crearArticle();
  const mailer = new ArticleMailerService(article);
  await mailer.notificarComprador();
  // await mailer.notificarVendedor();

  res.status(200).json(article);
}
