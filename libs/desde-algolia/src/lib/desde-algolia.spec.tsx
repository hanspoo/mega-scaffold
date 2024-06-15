import { render } from '@testing-library/react';

import DesdeAlgolia from './desde-algolia';

describe('DesdeAlgolia', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesdeAlgolia />);
    expect(baseElement).toBeTruthy();
  });
});
