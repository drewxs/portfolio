import { ReactElement } from 'react';

import { Typewriter } from 'components';

export const Hero = (): ReactElement => {
  return (
    <section className='home hero'>
      <div className='container'>
        <h1>
          <Typewriter text='Hi there,' />
          <br />
          <Typewriter text='welcome to my site :)' delay={2000} linger />
        </h1>
      </div>
    </section>
  );
};
