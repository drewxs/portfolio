import { ReactElement } from 'react';

import { Typewriter } from '@/components';
import { hero } from '@/data';

/**
 * Home page hero section.
 */
export const Hero = (): ReactElement => {
  const speed = 30;
  const delay = 200;
  const duration = 1000;
  const line1Delay = delay + hero.line1.length * speed + duration;
  const line2Delay = delay + hero.line2.length * speed + line1Delay;

  return (
    <section className='home hero'>
      <div className='container'>
        <h1>
          <Typewriter text={hero.line1} speed={speed} delay={delay} />
          <Typewriter text={hero.line2} speed={speed} delay={line1Delay} lingerDuration={0} />
          <Typewriter text=' ' speed={speed} delay={line2Delay} linger />
        </h1>
      </div>
    </section>
  );
};
