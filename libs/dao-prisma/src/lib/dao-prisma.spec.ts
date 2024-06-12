import { daoPrisma } from './dao-prisma';

describe('daoPrisma', () => {
  it('should work', () => {
    expect(daoPrisma()).toEqual('dao-prisma');
  });
});
