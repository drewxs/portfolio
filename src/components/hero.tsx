import { Typewriter } from "./typewriter";

const data = {
  line1: `Hi there,`,
  line2: `welcome to my site :)`,
};

export const Hero = () => {
  const speed = 30;
  const delay = 200;
  const duration = 1000;
  const line1Delay = delay + data.line1.length * speed + duration;
  const line2Delay = delay + data.line2.length * speed + line1Delay;

  return (
    <section className="home hero">
      <div className="container">
        <h1>
          <Typewriter text={data.line1} speed={speed} delay={delay} />
          <Typewriter text={data.line2} speed={speed} delay={line1Delay} lingerDuration={0} />
          <Typewriter text=" " speed={speed} delay={line2Delay} linger />
        </h1>
      </div>
    </section>
  );
};
