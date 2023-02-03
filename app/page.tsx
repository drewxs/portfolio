import { Code, Contact, Experience, Hero, Projects } from 'components';

const getRepos = async () => {
  try {
    const res = await fetch(`${process.env.SITE_URL}/api/repos`, { next: { revalidate: 60 } });
    const data = await res.json();
    return data.repos;
  } catch (error) {
    return error;
  }
};

const Home = async () => {
  const repos = await getRepos();

  return (
    <>
      <Hero />
      {!(repos instanceof Error) && <Code repos={repos} />}
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
