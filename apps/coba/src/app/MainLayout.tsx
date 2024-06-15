'use client';
import { Footer, Header, StoreProvider } from '@coba/components';

export function MainLayout({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto max-w-screen-xl h-screen flex flex-col justify-between">
      <div>
        <Header />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

type JumbotronProps = {
  title: string;
  content: string;
  className: string;
};
function Jumbotron({ title, content, className }: JumbotronProps) {
  return (
    <div
      className={`${className} my-4 p-10 text-6xl  rounded-lg shadow-lg mx-2 lg:mx-0 hover:text-white`}
    >
      {title}
      <div className="my-4 text-2xl">{content}</div>
    </div>
  );
}
