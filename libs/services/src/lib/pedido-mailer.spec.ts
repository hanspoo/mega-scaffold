import { ServicioPedidosPrisma } from '@coba/dao-prisma';
import { render, screen } from '@testing-library/react';

import { PedidoMailerService } from './PedidoMailerService';
import { CorreoComprador, renderEmailComprador } from '@coba/components';
import ReactDOMServer = require('react-dom/server');
import React = require('react');
const cart = {
  createdAt: 1718589621685,
  items: [
    {
      id: '1',
      name: 'West Lake R12 5.00 r12 cr868 83/82p',
      quantity: 1,
      value: 40000,
    },
    { id: '2', name: 'West Lake R13 155/65 ', quantity: 1, value: 40000 },
  ],
};
const contact = {
  name: 'juan pérez',
  coments: 'Lorem ipsum dolor',
  phone: '+56993199305',
  email: 'hanspoo@gmail.com',
};

describe('pedido mailer', () => {
  // it('SSR email', async () => {
  //   const servicio = new ServicioPedidosPrisma(cart, contact);
  //   const pedido = await servicio.crearPedido();
  //   const htmlString = ReactDOMServer.renderToString(
  //     <CorreoComprador pedido={pedido} />
  //   );
  // });
  it('enviar correos', async () => {
    const servicio = new ServicioPedidosPrisma(cart, contact);
    const pedido = await servicio.crearPedido();
    console.log(JSON.stringify(pedido));
    // const mailer = new PedidoMailerService(pedido);
    // const htmlEmail = renderEmailComprador(pedido);
    // console.log(htmlEmail);
    // await mailer.notificarComprador();
  });
});
