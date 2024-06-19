import React from 'react';
import { pedido } from './pedido-mock';
import { CorreoComprador } from '../CorreoComprador';
import { renderToString } from 'react-dom/server';

describe('RSC', () => {
  it('renders on server', () => {
    const renderOnServer = () =>
      renderToString(<CorreoComprador pedido={pedido} />);

    expect(renderOnServer).not.toThrow();
    expect(renderOnServer()).toContain('src="bar.png"');
  });
});
