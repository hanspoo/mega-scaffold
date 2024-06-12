import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function daoPrisma() {
  const user = await prisma.pedido.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.io',
    },
  });
  console.log(user);
}

daoPrisma()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
