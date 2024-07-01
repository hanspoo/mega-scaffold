import Head from 'next/head';
import { Footer } from '../../components/footer';
import { AdminNavbar } from './admin-navbar';

export function AdminLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Head>
        <title>Canal de denuncias</title>
        <meta name="description" content="Canal de denuncias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <AdminNavbar />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
