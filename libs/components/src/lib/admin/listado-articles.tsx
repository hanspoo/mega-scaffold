import { ShieldCheckIcon } from '@heroicons/react/24/solid';
import { Article } from '@mega-scaffold/api-interfaces';

type ListadoArticlesProps = {
  articles: Article[];
};

export function ListadoArticles({ articles }: ListadoArticlesProps) {
  return (
    <div className={`overflow-x-auto`}>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Article</th>
            <th className="hidden md:table-cell">Sucursal</th>
            <th className="hidden md:table-cell">Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((row) => (
            <FilaArticle article={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function FilaArticle({ article }: { article: Article }) {
  const { coments, email, name, phone } = article;

  return (
    <tr>
      <td>
        <div className="flex">
          <ShieldCheckIcon className="w-6 mr-2" />
          {coments}
        </div>
      </td>
      <td className="hidden md:table-cell">{name}</td>
      <td className="hidden md:table-cell">{email}</td>
      <td>Derivada Juan Pérez</td>
    </tr>
  );
}
