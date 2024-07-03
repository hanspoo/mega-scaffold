import { useRef, useEffect } from 'react';

type ModalFormDenunciaProps = {
  title?: string;
  text?: React.ReactNode;
  visible?: boolean;
  onClose?: () => void;
};

export function ModalFormDenuncia({
  title,
  text,
  visible,
  onClose,
}: ModalFormDenunciaProps) {
  const modalRef = useRef<any>(null);

  useEffect(() => {
    if (!modalRef.current) {
      return;
    }
    visible ? modalRef.current.showModal() : modalRef.current.close();
  }, [visible]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleESC = (event: any) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <dialog
      ref={modalRef}
      id="my_modal_1"
      className="modal"
      onCancel={handleESC}
    >
      <form method="dialog" className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click the button below to close</p>
        <div className="modal-action">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn" onClick={handleClose}>
            Close
          </button>
        </div>
      </form>
    </dialog>
  );
}
