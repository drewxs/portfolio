import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';
import { GetStaticProps } from 'next';

import { Code, Contact, Experience, Head, Hero, Projects } from 'components';

type ReposType = Endpoints['GET /user/repos']['response']['data'];

const Home = ({ repos }: { repos: ReposType }) => {
  return (
    <>
      <Head />
      <Hero />
      <Code repos={repos} />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const octokit = new Octokit({ auth: process.env.PERSONAL_ACCESS_TOKEN });
  const res = await octokit.request(`GET /user/repos`, {
    type: 'public',
    page: 1,
    per_page: 6,
    sort: 'updated',
    direction: 'desc',
  });
  const repos = res.data;

  return {
    props: { repos },
    revalidate: 10,
  };
};

export default Home;
