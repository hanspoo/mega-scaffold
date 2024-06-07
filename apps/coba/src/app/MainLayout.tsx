'use client';
import { Footer, Header, StoreProvider } from '@coba/components';

import { Provider } from 'react-redux';

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
