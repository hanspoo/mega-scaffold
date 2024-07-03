import { Hero } from 'react-daisyui';

import { AdminLayout, ListadoDenuncias, Stats } from '@coba/kari-components';

export default function AdminZone() {
  return (
    <div>
      <Hero className="my-6 overflow-hidden">
        <Stats />
      </Hero>

      <div className="mb-12">
        <ListadoDenuncias />
      </div>
    </div>
  );
}

AdminZone.getLayout = function getLayout(page: React.ReactElement) {
  return <AdminLayout>{page}</AdminLayout>;
};
