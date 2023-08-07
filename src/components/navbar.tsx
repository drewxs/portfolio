'use client';

import clsx from 'clsx';

import { Link, Socials, ThemeChanger } from '@/components';
import { nav } from '@/data';
import { NavLink } from '@/types';
import { useScrollPosition } from '@/utils';

export const Navbar = () => {
  const scrollPosition = useScrollPosition();

  return (
    <nav className={clsx('nav', { min: scrollPosition > 50 })}>
      <div className='container nav__container'>
        <div className='nav__brand'>
          <h4 className='nav__title'>Andrew X. Shah</h4>
          <h4 className='nav__title xs'>Andrew S.</h4>
        </div>
        <div className='nav__links'>
          {nav?.map((link: NavLink) => (
            <Link className='nav-link' href={link.url} key={link.text}>
              {link.text}
            </Link>
          ))}
          <Socials />
          <ThemeChanger />
        </div>
      </div>
    </nav>
  );
};
