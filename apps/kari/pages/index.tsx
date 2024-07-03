import { LandingHome, Layout } from '@coba/components';

export default function Home() {
  return <LandingHome />;
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
