import { FormDenuncia } from '@coba/components';
import { Layout } from '@coba/components';

export default function Denuncia() {
  return <FormDenuncia />;
}

Denuncia.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
