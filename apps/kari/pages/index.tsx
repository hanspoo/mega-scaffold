import { LandingHome, Layout } from '@coba/kari-components';

export default function Home() {
  return <LandingHome />;
}

Home.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};
