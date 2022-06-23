import { ReactElement } from 'react';

import { Socials, ThemeChanger } from 'components';

/**
 * Navigation bar component.
 */
export const Navbar = (): ReactElement => {
  return (
    <nav className='nav'>
      <div className='container nav__container'>
        <div className='nav__brand'>
          <h4 className='nav__title'>Andrew Shah</h4>
        </div>
        <div className='nav__links'>
          <Socials />
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};
