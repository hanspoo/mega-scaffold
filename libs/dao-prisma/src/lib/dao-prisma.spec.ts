import { daoPrisma } from './dao-prisma';

describe('daoPrisma', () => {
  it('should work', async () => {
    const data = await daoPrisma();
    console.log(data);
    expect(data.email).toEqual('alice@prisma.io');
  });
});
