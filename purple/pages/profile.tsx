import Link from 'next/link';

import styles from '../styles/Home.module.css';
import { Button } from 'react-daisyui';

export default function ProfileView() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <Link href="/">
          <button>Back to Home</button>
        </Link>
        <h1 className="p-3">Bienvenido</h1>
        <Button>
          <Link href="/denuncias">Denuncias</Link>
        </Button>
      </div>
      <footer className="p-3 bg-sky-300">Footer</footer>
    </div>
  );
}
