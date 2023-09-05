import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Endpoints } from '@octokit/types';

import { Link } from '@/components';

type RepoType = Endpoints['GET /user/repos']['response']['data'][0];

export const RepoCard = ({ repo }: { repo: RepoType }) => {
  return (
    <div className='repo-card'>
      <h2 className='repo-card__title h4'>{repo.name}</h2>
      <p className='repo-card__description'>{repo.description}</p>
      <p className='repo-card__language'>{repo.language}</p>
      <Link className='repo-link' href={repo.html_url} target='_blank'>
        View Repository
        <FontAwesomeIcon icon={faChevronRight} className='repo-link__chevron' />
        <FontAwesomeIcon icon={faChevronRight} className='repo-link__chevron' />
      </Link>
    </div>
  );
};
