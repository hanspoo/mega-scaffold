import { BuildingLibraryIcon } from '@heroicons/react/24/solid';
import Profile from '../admin/profile';
import Link from 'next/link';

export function Navbar({ conLogin = true }: { conLogin?: boolean }) {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          <BuildingLibraryIcon className="w-6" /> Stargate
        </Link>
      </div>
      {conLogin && (
        <div className="navbar-end">
          <Profile />
        </div>
      )}
    </div>
  );
}
