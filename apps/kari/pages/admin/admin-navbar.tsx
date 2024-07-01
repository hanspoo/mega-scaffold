import { BuildingLibraryIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import Profile from '../../components/profile';

export function AdminNavbar() {
  return (
    <div className="navbar bg-base-300">
      <div className="navbar-start">
        <Link href="/" className="btn btn-ghost text-xl">
          <BuildingLibraryIcon className="w-6" /> Stargate
        </Link>
      </div>
      <div className="navbar-end">
        <Profile />
      </div>
    </div>
  );
}
