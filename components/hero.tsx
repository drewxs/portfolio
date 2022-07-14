import { ReactElement } from 'react';

import { Typewriter } from 'components';
import { hero } from 'data';

/**
 * Home page hero section.
 */
export const Hero = (): ReactElement => {
  const line1Delay = hero.line1.length * 244.444444444;
  const line2Delay = (hero.line1.length + hero.line2.length) * 113.333333333;

  return (
    <section className='home hero'>
      <div className='container'>
        <h1>
          <Typewriter text={hero.line1} />
          <br />
          <Typewriter text={hero.line2} delay={line1Delay} lingerDuration={0} />
          <br />
          <Typewriter text=' ' delay={line2Delay} linger />
          <br />
        </h1>
      </div>
    </section>
  );
};
