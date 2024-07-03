import { render } from '@testing-library/react';

import KariComponents from './kari-components';

describe('KariComponents', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<KariComponents />);
    expect(baseElement).toBeTruthy();
  });
});
