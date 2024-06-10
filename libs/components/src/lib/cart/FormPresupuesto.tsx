import { useState } from 'react';
import { Formik, Form, Field, useField } from 'formik';
import * as Yup from 'yup';
import { Cart } from '@coba/api-interfaces';
import { ProcesandoPedido } from './ProcesandoPedido';
import { ContactInfo } from '../../../../api-interfaces/src/lib/pedidos/ContactInfo';

const MyTextArea = (props: any) => {
  const [field, meta] = useField(props);
  return <textarea className="textarea" {...field} {...props} />;
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
  const [enviando, setEnviando] = useState(false);
  const [contact, setContact] = useState<ContactInfo>();
  // const [presupuestoEnviado, setPresupuestoEnviado] = useState(false);
  // const [error, setError] = useState('');

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

  if (enviando && contact)
    return (
      <div>
        <h1 className="my-2 font-bold text-2xl">Solicitar Presupuesto</h1>
        <ProcesandoPedido cart={cart} contact={contact} />
      </div>
    );

  const INITIAL_VALUES: ContactInfo = {
    name: 'Juan Pérez',
    coments: 'Enviar a domicilio',
    phone: '+56 9 1234 5678',
    email: 'hanspoo@gmail.com',
  };

  const vacio: ContactInfo = {
    name: '',
    coments: '',
    phone: '',
    email: '',
  };

  return (
    <div>
      <h1 className="my-2 font-bold text-2xl">Solicitar Presupuesto</h1>
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
            <div>
              Nuestro equipo de ventas te contactará de inmediato para coordinar
              el pago y el despacho de los productos.
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre</span>

                {errors.name && touched.name ? (
                  <span className="text-red-200 label-text-alt">
                    {errors.name}
                  </span>
                ) : null}
              </label>
              <Field name="name" className="input" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>

                {errors.email && touched.email ? (
                  <span className="text-red-200 label-text-alt">
                    {errors.email}
                  </span>
                ) : null}
              </label>
              <Field name="email" className="input" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Teléfono</span>

                {errors.phone && touched.phone ? (
                  <span className="text-red-200 label-text-alt">
                    {errors.email}
                  </span>
                ) : null}
              </label>
              <Field name="phone" className="input" />
            </div>

            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text">Información adicional</span>

                {errors.coments && touched.coments ? (
                  <span className="text-red-200 label-text-alt">
                    {errors.coments}
                  </span>
                ) : null}
              </label>
              <MyTextArea name="coments" className="textarea" rows={4} />
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
