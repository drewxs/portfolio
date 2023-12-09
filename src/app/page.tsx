import { Octokit } from '@octokit/core';
import { Endpoints } from '@octokit/types';

import { Code } from '@/components/code';
import { Contact } from '@/components/contact';
import { Experience } from '@/components/experience';
import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';

type ReposType = Endpoints['GET /user/repos']['response']['data'];

export const revalidate = 60;

const getRepos = async () => {
  const octokit = new Octokit({ auth: process.env.PERSONAL_ACCESS_TOKEN });
  const res = await octokit.request(`GET /user/repos`, {
    type: 'public',
    page: 1,
    per_page: 18,
    sort: 'created',
    direction: 'desc',
  });
  const repos: ReposType = res.data;
  return repos;
};

const Home = async () => {
  const repos = await getRepos();

  return (
    <>
      <Hero />
      <Code repos={repos} />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
