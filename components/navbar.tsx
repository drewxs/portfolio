import { ReactElement } from 'react';

import { Socials, ThemeChanger } from 'components';
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
