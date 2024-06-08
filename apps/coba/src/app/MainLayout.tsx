'use client';
import { Footer, Header, StoreProvider } from '@coba/components';
import { fetchShoppingCart } from '@coba/redux-store';

import { useEffect } from 'react';

import { Provider, useDispatch } from 'react-redux';

export function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <StoreProvider>
      <div className="mx-auto max-w-screen-xl h-screen flex flex-col justify-between">
        <div>
          <Header />
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </StoreProvider>
  );
}
