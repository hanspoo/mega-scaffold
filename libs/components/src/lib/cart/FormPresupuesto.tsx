import { useState } from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import { Cart, ContactInfo } from '@coba/api-interfaces';
import { ProcesandoPedido } from './ProcesandoPedido';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import { useDispatch } from 'react-redux';
import { removeItem } from '@coba/redux-store';
import { CartTable } from './CartTable';

const MyTextArea = (props: any) => {
  const [field, meta] = useField(props);
  return <textarea className="textarea " {...field} {...props} />;
};

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Muy corto')
    .max(50, 'Muy largo')
    .required('Requerido'),
  email: Yup.string().email('Email inválido').required('Requerido'),
  phone: Yup.string()
    .min(7, 'Muy corto')
    .max(12, 'Muy largo')
    .required('Requerido'),
  coments: Yup.string(),
});

type Props = {
  cart: Cart;
};

export const FormPresupuesto = ({ cart }: Props) => {
  const dispatch = useDispatch();
  const [enviando, setEnviando] = useState(false);
  const [contact, setContact] = useState<ContactInfo>();
  const [presupuestoEnviado, setPresupuestoEnviado] = useState(false);
  const [error, setError] = useState('');

  const submitForm = (values: any) => {
    setEnviando(true);
    setContact(values);
    // axios
    //   .post('/api/pedidos', { cart, values })
    //   .then((response) => {
    //     setPresupuestoEnviado(true);
    //     // setEnviando(false);
    //   })
    //   .catch((error) => {
    //     setError(error.message);
    //     // setEnviando(false);
    //   });
  };

  if (presupuestoEnviado) {
    // dispatch(removeItem('') as any);
    return (
      <div className="mb-10">
        <h1 className="my-2 font-bold text-2xl">Solicitar Presupuesto</h1>
        <p className="mb-2">
          Gracias por preferir Coba. Hemos recibido su pedido y se le ha
          enviando un correo de confirmación.
        </p>
        <CheckCircleIcon className="h-16 text-white " />
        <p className="mb-4">
          Nuestro equipo de ventas lo contactará en algunos minutos.
        </p>

        <a href="/" className="btn btn-primary mb-4 ">
          Continuar en la tienda
        </a>

        <p>
          Atte, <br />
          ZonaCoba
        </p>
      </div>
    );
  }
  if (error)
    return (
      <div>
        <div className="text-error mb-4">Ha ocurrido un error: {error}</div>
        <a className="my-2 btn btn-primary" href="/checkout">
          Reintentar
        </a>
      </div>
    );

  if (enviando && contact)
    return (
      <ProcesandoPedido
        cart={cart}
        contact={contact}
        onError={(s: string) => {
          setError(s);
        }}
        onSuccess={() => {
          dispatch(removeItem('') as any);
          setPresupuestoEnviado(true);
        }}
      />
    );

  return (
    <div className="mb-10">
      <h1 className="my-2 mb-4 font-bold text-2xl">Productos seleccionados</h1>
      <CartTable cart={cart} />
      <h1 className="my-2 mb-4 font-bold text-2xl">Solicitar Presupuesto</h1>
      <Formik
        initialValues={{
          name: '',
          coments: '',
          phone: '',
          email: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          submitForm(values);
          console.log({ values });
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col">
            <div className="mb-6">
              Nuestro equipo de ventas te contactará de inmediato para coordinar
              el pago y el despacho de los productos.
            </div>
            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Nombre</span>

                {errors.name && touched.name ? (
                  <span className="text-red-200 label-text-alt">
                    {errors.name}
                  </span>
                ) : null}
              </label>
              <Field name="name" className="input bg-secondary" />
            </div>

            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Email</span>

                {errors.email && touched.email ? (
                  <span className="text-red-200 label-text-alt">
                    {errors.email}
                  </span>
                ) : null}
              </label>
              <Field name="email" className="input bg-secondary" />
            </div>

            <div className="form-control mb-2">
              <label className="label">
                <span className="label-text">Teléfono</span>

                {errors.phone && touched.phone ? (
                  <span className="text-red-200 label-text-alt">
                    {errors.email}
                  </span>
                ) : null}
              </label>
              <Field name="phone" className="input bg-secondary" />
            </div>

            <div className="form-control mb-8">
              <label className="label">
                <span className="label-text">Información adicional</span>

                {errors.coments && touched.coments ? (
                  <span className="text-red-200 label-text-alt">
                    {errors.coments}
                  </span>
                ) : null}
              </label>
              <MyTextArea
                name="coments"
                className="textarea bg-secondary"
                rows={4}
              />
            </div>

            <button className="btn btn-primary" type="submit">
              Enviar
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
