'use client';
import { useRef } from 'react';
import { Provider } from 'react-redux';

import React from 'react';
import { AppStore, makeStore } from '@coba/redux-store';

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
