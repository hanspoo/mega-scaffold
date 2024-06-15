'use client';
import { useCallback, useRef, useState } from 'react';
import { removeItem } from '@coba/redux-store';
import { useDispatch } from 'react-redux';
import { Button, Modal } from 'react-daisyui';
import { FormPresupuesto } from './FormPresupuesto';
import { Cart } from '@coba/api-interfaces';
import { CartTable } from './CartTable';

export type CartComponentProps = {
  cerrar: () => void;
  cart: Cart;
};

export function CartComponent({ cerrar, cart }: CartComponentProps) {
  const [presupuesto, setPresupuesto] = useState(false);
  const dispatch = useDispatch();
  const refVaciar = useRef<HTMLDialogElement>(null);
  const handleShowVaciar = useCallback(() => {
    refVaciar.current?.showModal();
  }, [refVaciar]);
  const refPresupuesto = useRef<HTMLDialogElement>(null);
  const handleShowPresupuesto = useCallback(() => {
    refPresupuesto.current?.showModal();
  }, [refPresupuesto]);

  const vaciar = () => {
    dispatch(removeItem('') as any);
  };

  return (
    <div className="bg-secondary cursor-default  border-2 shadow-lg z-[1000] p-2 min-h-80 w-11/12 min-w-[350px] lg:min-w-[400px] absolute top-8 -right-10 rounded-sm">
      <Modal ref={refVaciar} className="bg-secondary">
        <Modal.Header className="font-bold mb-2">Vaciar Canasta</Modal.Header>
        <Modal.Body className="mb-5">
          Se borrarán todos los productos seleccionados
        </Modal.Body>
        <Modal.Actions>
          <form method="dialog">
            <Button className="mr-1">No</Button>
            <Button onClick={vaciar}>Si</Button>
          </form>
        </Modal.Actions>
      </Modal>
      <Modal ref={refPresupuesto} className="bg-secondary p-4">
        <Modal.Header className="font-bold mb-2">
          Solicitar presupuesto
        </Modal.Header>
        <Modal.Body className="mb-5">
          <FormPresupuesto cart={cart} />
        </Modal.Body>
        <Modal.Actions>
          <form method="dialog">
            <Button className="mr-1">Cancelar</Button>
            <Button>Enviar</Button>
          </form>
        </Modal.Actions>
      </Modal>

      <h2 className="text-2xl mb-2">Shopping Cart</h2>
      {cart!.items.length === 0 && <p>No hay productos</p>}
      {cart?.items.length > 0 && <CartTable cart={cart} />}
      <div className="my-6">
        {cart!.items.length > 0 && (
          <button className="btn mr-1" onClick={handleShowVaciar}>
            Vaciar
          </button>
        )}
        <button className="btn" onClick={cerrar}>
          Cerrar
        </button>
        {cart!.items.length > 0 && (
          <a className="ml-6 btn btn-primary" href="/checkout">
            Solicitar Presupuesto
          </a>
        )}
      </div>
      {presupuesto && <FormPresupuesto cart={cart} />}
    </div>
  );
}
