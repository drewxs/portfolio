import { Code, Contact, Experience, Hero, Projects } from 'components';

const Home = async () => {
  const res = await fetch(`${process.env.SITE_URL}/api/repos`, { next: { revalidate: 60 } });
  const data = await res.json();

  return (
    <>
      <Hero />
      <Code repos={data.repos} />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
};

export default Home;
