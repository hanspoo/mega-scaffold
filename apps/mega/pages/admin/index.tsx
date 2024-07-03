import { Hero } from 'react-daisyui';

import {
  AdminLayout,
  ContainerListadoArticles,
  Stats,
} from '@mega-scaffold/components';

export default function AdminZone() {
  return (
    <div>
      <Hero className="my-6 overflow-hidden">
        <Stats />
      </Hero>

      <div className="mb-12">
        <ContainerListadoArticles />
      </div>
    </div>
  );
}

AdminZone.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
