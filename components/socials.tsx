import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement } from 'react';

import { Link } from 'components';

/**
 * Social links component.
 */
export const Socials = (): ReactElement => {
	return (
		<div className='socials'>
			<Link className='socials__link' href='https://www.linkedin.com/in/andrewxshah' target='_blank'>
				<FontAwesomeIcon icon={faLinkedin} />
			</Link>
			<Link className='socials__link' href='https://github.com/kito0' target='_blank'>
				<FontAwesomeIcon icon={faGithubSquare} />
			</Link>
		</div>
	);
};
