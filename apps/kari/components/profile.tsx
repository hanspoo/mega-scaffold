import { signIn, signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import useSWR from 'swr';

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

export default function Profile() {
  const { data: session, status } = useSession();

  const loading = status === 'loading';

  const { data: user, isValidating } = useSWR(`/api/userinfo`, (url) =>
    loadData(url)
  );

  const scope = 'urn:zitadel:iam:org:project:roles';

  return (
    <div className="flex">
      {!session && <SinSesion />}
      {(loading || isValidating) && <span>loading...</span>}
      {user && <AvatarUsuario user={user} scope={scope} />}
    </div>
  );
}
function AvatarUsuario({ user, scope }: { user: any; scope: string }) {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-ghost btn-circle avatar"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
          />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
      >
        <li>
          <p>Conectado como {user.name}</p>
        </li>
        <li>
          <button
            className="btn btn-secondary btn-sm"
            onClick={() => signOut()}
          >
            Cerrar sesión
          </button>
        </li>
      </ul>
    </div>
  );
}

function SinSesion() {
  return (
    <div className="flex items-center">
      <button
        className="btn btn-secondary btn-sm"
        onClick={() =>
          signIn('zitadel', {
            callbackUrl: 'http://localhost:3000/admin',
          })
        }
      >
        Iniciar sesión
      </button>
    </div>
  );
}
