import { ReactElement } from 'react';

import { Socials } from '@/components';

/**
 * Footer component.
 */
export const Footer = (): ReactElement => {
  return (
    <section className='footer'>
      <div className='container'>
        <div className='footer__divider' />
        <div className='footer__row'>
          <p className='footer__copyright'>&copy; Andrew Xavier Shah. All Rights Reserved.</p>
          <Socials />
        </div>
      </div>
    </section>
  );
};
