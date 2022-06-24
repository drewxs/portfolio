import { Octokit } from '@octokit/core';
import { GetStaticProps } from 'next';

import { Code, Head, Hero, Projects } from 'components';
import { projects } from 'data';

const Home = ({ repos }: { repos: any }) => {
  return (
    <>
      <Head />
      <Hero />
      <Code repos={repos} />
      <Projects projects={projects} />
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
  });
  const repos = res.data;

  return {
    props: { repos },
    revalidate: 10,
  };
};

export default Home;
