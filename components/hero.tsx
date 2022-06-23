import { ReactElement } from 'react';

import { Typewriter } from 'components';

/**
 * Home page hero section.
 */
export const Hero = (): ReactElement => {
  return (
    <section className='home hero'>
      <div className='container'>
        <h1>
          <Typewriter text='Hi there,' />
          <br />
          <Typewriter text='welcome to my site :)' delay={2200} lingerDuration={0} />
          <br />
          <Typewriter text=' ' delay={3400} linger />
          <br />
        </h1>
      </div>
    </section>
  );
};
