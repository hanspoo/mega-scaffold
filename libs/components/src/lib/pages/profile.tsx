import Link from 'next/link';

import { Button, Card } from 'react-daisyui';

export default function ProfileView() {
  return (
    <div className="flex flex-col justify-between h-screen">
      <div>
        <Link href="/">
          <button>Back to Home</button>
        </Link>
        <h1 className="p-3">Bienvenido</h1>
        <Card>
          <h1>300</h1>
        </Card>

        <Button>
          <Link href="/articles">Articles</Link>
        </Button>
      </div>
      <footer className="p-3 bg-sky-300">Footer</footer>
    </div>
  );
}
