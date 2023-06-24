import { Img, Link } from '@/components';

export const ProjectCard = ({ project }: { project: Project }) => {
  const { _id, title, url, img } = project;

  return (
    <Link className='project-card' href={url} target='_blank'>
      <Img className='project-card__img' src={img} alt={title} style={{ objectFit: 'cover' }} fill={true} />
      <div className='project-card__overlay' />
      <div className='project-card__inner'>
        <h2 className='project-card__title h4'>{title}</h2>
        <p className='project-card__id'>{_id}</p>
      </div>
    </Link>
  );
};
