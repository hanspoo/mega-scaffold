'use client';
import { SeccionCheckout } from '@coba/components';
import { Banner } from '@coba/desde-algolia';

export default function Index() {
  return (
    <div>
      <h1>Sección checkout</h1>
      <Banner size={'s'} />

      <SeccionCheckout />
    </div>
  );
}
