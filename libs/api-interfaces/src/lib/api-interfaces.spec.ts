import { apiInterfaces } from './api-interfaces';

describe('apiInterfaces', () => {
  it('filtrar r12', () => {
    expect(apiInterfaces()).toEqual('api-interfaces');
  });
});
