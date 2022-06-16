import type { NextPage } from 'next';
import type { ReactElement } from 'react';

import { Layout } from 'layout';

const Home = () => {
  return <></>;
};

export default Home;

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
