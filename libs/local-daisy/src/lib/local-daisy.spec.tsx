import { render } from '@testing-library/react';

import LocalDaisy from './local-daisy';

describe('LocalDaisy', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<LocalDaisy />);
    expect(baseElement).toBeTruthy();
  });
});
