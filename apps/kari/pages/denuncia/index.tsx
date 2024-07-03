import { FormDenuncia } from '@coba/kari-components';
import { Layout } from '../layout';

export default function Denuncia() {
  return <FormDenuncia />;
}

Denuncia.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
