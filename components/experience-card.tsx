import { ReactElement } from 'react';

import { Img, Link } from 'components';

/**
 * A card containing information about an experience.
 *
 * @param exp - experience object
 */
export const ExperienceCard = ({ exp }: { exp: Experience }): ReactElement => {
	const { _id, year, title, description, company, url } = exp;

	return (
		<div className='experience-card'>
			<h2 className='experience-card__year'>{year}</h2>
			<h3 className='experience-card__title'>{title}</h3>
			<Link className='experience-card__company' href={url} target='_blank'>
				{company}
			</Link>
			<p className='experience-card__description'>{description}</p>
		</div>
	);
};
