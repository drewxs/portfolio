import { ReactElement } from 'react';

import { NavLink, Socials, ThemeChanger } from 'components';
import { nav } from 'data';
import { useScrollPosition } from 'utils';

/**
 * Navigation bar component.
 */
export const Navbar = (): ReactElement => {
	const scrollPosition = useScrollPosition();

	return (
		<nav className={`nav ${scrollPosition > 50 ? 'min' : ''}`}>
			<div className='container nav__container'>
				<div className='nav__brand'>
					<h4 className='nav__title'>
						Andrew <span className='nav__title nav__title--initial'>X. </span>Shah
					</h4>
				</div>
				<div className='nav__links'>
					{nav?.map((link: NavLink) => (
						<NavLink href={link.url} key={link.text}>
							{link.text}
						</NavLink>
					))}
					<Socials />
					<ThemeChanger />
				</div>
			</div>
		</nav>
	);
};
