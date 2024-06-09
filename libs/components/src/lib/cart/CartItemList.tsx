'use client';
import { CartItem } from '@coba/api-interfaces';
import { removeItem } from '@coba/redux-store';
import { TrashIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { currencyFormatter } from './CartComponent';
import { useRef, useCallback } from 'react';
import { Modal, Button } from 'react-daisyui';

export function CartItemList({ item, i }: { item: CartItem; i: number }) {
  const ref = useRef<HTMLDialogElement>(null);
  const dispatch = useDispatch();
  const handleShow = useCallback(() => {
    ref.current?.showModal();
  }, [ref]);

  function removeProduct() {
    dispatch(removeItem(item.id) as any);
  }
  const bg = i % 2 === 0 ? 'bg-white' : '';

  return (
    <>
      <Modal ref={ref} className="bg-secondary p-4">
        <Modal.Header className="font-bold mb-2">Quitar producto</Modal.Header>
        <Modal.Body className="mb-5">
          ¿ Confirma quitar {item.name} de la canasta ?
        </Modal.Body>
        <Modal.Actions>
          <form method="dialog">
            <Button className="mr-1">No</Button>
            <Button onClick={removeProduct}>Si</Button>
          </form>
        </Modal.Actions>
      </Modal>
      <tr className={`${bg}`}>
        <td className="w-[70%] p-1">{item.name}</td>
        <td className="w-[10%] p-1 text-right">{item.quantity}</td>
        <td className="w-[20%] p-1 text-right">
          {currencyFormatter.format(item.value)}
        </td>
        <td className="p-1">
          <TrashIcon className="w-[16px] cursor-pointer" onClick={handleShow} />
        </td>
      </tr>
    </>
  );
}
