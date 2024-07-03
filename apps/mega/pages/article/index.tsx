import { FormArticle } from '@mega-scaffold/components';
import { Layout } from '@mega-scaffold/components';

export default function Article() {
  return <FormArticle />;
}

Article.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
