import { signIn, useSession } from 'next-auth/react';

import useSWR from 'swr';
import { PropsWithChildren } from 'react';

import { AdminNavbar } from './admin-navbar';
import { Footer } from '../../public/footer';

const loadData = (url: string) =>
  fetch(url).then((resp) => {
    if (resp.ok) {
      return resp.json() as Promise<any>;
    } else {
      return resp.json().then((error) => {
        throw error;
      });
    }
  });

export function AdminLayout({ children }: PropsWithChildren) {
  const { data: session, status } = useSession();

  const loading = status === 'loading';

  const { data: user, isValidating } = useSWR(`/api/userinfo`, (url) =>
    loadData(url)
  );

  const scope = 'urn:zitadel:iam:org:project:roles';

  return (
    <div className="flex flex-col h-screen">
      {!session && <SinSesion />}
      {(loading || isValidating) && <span>loading...</span>}
      {user && (
        <TheLayout user={user} scope={scope}>
          {children}
        </TheLayout>
      )}
    </div>
  );
}
function TheLayout({
  children,
  user,
  scope,
}: PropsWithChildren<{ user: any; scope: string }>) {
  return (
    <div className="flex flex-col justify-between h-screen ">
      <div>
        <AdminNavbar />
        <div className="max-w-[1200px] m-auto">{children}</div>
      </div>

      <Footer />
    </div>
  );
}

function SinSesion() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <AdminNavbar />
        <div className="hero min-h-[600px]">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-4xl font-bold">Administración</h1>
              <p className="py-6">Debe iniciar sesión para continuar</p>

              <button
                className="btn btn-primary"
                onClick={() =>
                  signIn('zitadel', {
                    callbackUrl: 'http://localhost:3000/admin',
                  })
                }
              >
                Iniciar sesión
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
