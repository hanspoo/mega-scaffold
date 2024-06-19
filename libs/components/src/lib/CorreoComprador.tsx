import { Pedido, Item } from '@coba/api-interfaces';

export function CorreoComprador({ pedido }: { pedido: Pedido }) {
  return (
    <>
      <p>Hola {pedido.name}</p>
      <p>
        Hemos recibido un pedido de compra de neumáticos en ZonaCoba. Se ha
        colocado este email en la información de contacto, si no eres tu,
        lamentamos las molestias y no tomes en cuenta este correo.
      </p>
      <p>El detalle es el siguiente:</p>

      <table>
        {pedido.items.map((item) => (
          <PedidoTableItem item={item} key={item.id} />
        ))}
      </table>

      <p>
        Nuestro equipo de ventas te contactará para confirmar los detalles del
        pedido, la forma de pago y el despacho.
      </p>
      <p>
        Gracias,
        <br />
        Atte, Equipo ZonaCoba
      </p>
    </>
  );
}

function PedidoTableItem({ item }: { item: Item }) {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.value}</td>
      <td>{item.value * item.quantity}</td>
    </tr>
  );
}
