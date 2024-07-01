import { Navbar } from '../components/navbar';
import Head from 'next/head';
import { Footer } from '../components/footer';

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="flex h-screen flex-col justify-between">
      <Head>
        <title>Canal de denuncias</title>
        <meta name="description" content="Canal de denuncias" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Navbar conLogin={false} />
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  );
}
