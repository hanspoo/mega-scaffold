import { Cart, ContactInfo } from '@coba/api-interfaces';
import { ServicioDenunciasPrisma } from './ServicioNuevasDenuncias';
import { PrismaClient } from '@prisma/client';

process.env['DATABASE_URL'] = 'postgresql://julian:hp8270@localhost:5432/coba';

const cart: Cart = {
  createdAt: 1718230424451,
  items: [
    {
      id: '1',
      name: 'West Lake R12 5.00 r12 cr868 83/82p',
      quantity: 5,
      value: 40000,
    },
    { id: '18', name: 'Goodyear R14 175/65', quantity: 2, value: 40000 },
    { id: '11', name: 'West Lake R14 175/65', quantity: 2, value: 40000 },
    { id: '2', name: 'West Lake R13 155/65 ', quantity: 4, value: 40000 },
    { id: '3', name: 'Kelly R13 175/70', quantity: 2, value: 40000 },
  ],
};

const contact: ContactInfo = {
  name: 'juan pérez',
  coments: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  phone: '+56993199305',
  email: 'hans@welinux.cl',
};

describe('crear denuncia directo en prisma', () => {
  it('debe crear al menos un item', async () => {
    const prisma = new PrismaClient();
    const item = {
      idItem: 'a',
      name: 'West Lake',
      quantity: 1541,
      value: 75000,
    };

    const items = [item];
    const ped = await prisma.denuncia.create({
      data: {
        createdAt: new Date(),
        estado: 'pendiente',
        ...contact,
        items: {
          create: items,
        },
      },
    });
    return ped;
  });
});

describe('crear denuncias', () => {
  it('crea con mismo email', async () => {
    const servicio = new ServicioDenunciasPrisma(cart, contact);
    const denuncia = await servicio.crearDenuncia();
    expect(denuncia.name).toBe(contact.name);
  });
  it.skip('crea todos los items', async () => {
    const servicio = new ServicioDenunciasPrisma(cart, contact);
    const denuncia = await servicio.crearDenuncia();
    expect(denuncia).toBe(contact.name);
  });
});
