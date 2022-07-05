import { ReactElement } from 'react';

import { Img, Link } from 'components';

/**
 * A card containing information about a Project.
 *
 * @param project - Project object
 */
export const ProjectCard = ({ project }: { project: Project }): ReactElement => {
	const { _id, title, url, img } = project;

	return (
		<Link className='project-card' href={url} target='_blank'>
			<Img
				className='project-card__img'
				src={`/projects/${img}`}
				alt={title}
				layout='fill'
				objectFit='cover'
				lazyBoundary='400px'
			/>
			<div className='project-card__overlay' />
			<div className='project-card__inner'>
				<h2 className='project-card__title h4'>{title}</h2>
				<p className='project-card__id'>{_id}</p>
			</div>
		</Link>
	);
};
