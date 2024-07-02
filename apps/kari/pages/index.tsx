import { Layout } from './layout';

export default function Home() {
  return (
    <div className="hero min-h-96 my-20">
      <div className="hero-content text-left">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Canal de Denuncias</h1>
          <p className="py-6">
            En este canal puedes ingresar denuncias en forma 100% anónima contra
            funcionarios de cualquier nivel de la organización: acoso laboral,
            ley karin, delitos financieros, nepotismo, etc, más información en:
            <a href="#"> Tipos de denuncias</a>.
          </p>
          <button className="mb-6 btn btn-primary">Ingresar Denuncia</button>
          <div className="mb-2 font-thin text-sm">
            Recuerda: Tu denuncia puede ayudar a otros en la misma situación. Si
            estás muy preocupado por tu anonimato, puedes ingresar a está página
            desde una ventana privada o de incógnito de tu navegador.
          </div>
        </div>
      </div>
    </div>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
