import { Hero } from 'react-daisyui';
import { AdminLayout } from './admin-layout';
import { ListadoDenuncias } from './listado-denuncias';
import { Stats } from './stats';
import { useSession } from 'next-auth/react';

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
