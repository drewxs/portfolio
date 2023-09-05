'use client';

import clsx from 'clsx';
import logo from 'public/logo.png';

import { Img, Socials, ThemeChanger } from '@/components';
import { useScrollPosition } from '@/hooks';

export const Navbar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <nav className={clsx('nav', { min: scrollPosition > 50 })}>
      <div className='container nav__container'>
        <div className='nav__brand'>
          <Img src={logo} alt='Logo' height={36} />
          <h4 className='nav__title'>Andrew X. Shah</h4>
          <h4 className='nav__title xs'>Andrew S.</h4>
        </div>
        <div className='nav__links'>
          <Socials />
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};
