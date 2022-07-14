import { faChevronRight, faCodeFork, faEye, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Endpoints } from '@octokit/types';
import { ReactElement } from 'react';

import { Link } from 'components';

type RepoType = Endpoints['GET /user/repos']['response']['data'][0];

/**
 * A card containing information about a GitHub repository.
 *
 * @param repo - GitHub repository object
 */
export const RepoCard = ({ repo }: { repo: RepoType }): ReactElement => {
  return (
    <div className='repo-card'>
      <h2 className='repo-card__title h4'>{repo.name}</h2>
      <p className='repo-card__description'>{repo.description}</p>
      <p className='repo-card__language'>{repo.language}</p>
      <div className='repo-count__row'>
        <FontAwesomeIcon icon={faStar} className='repo-count__icon' />
        <p className='repo-count__num'>{repo.stargazers_count}</p>
        <FontAwesomeIcon icon={faEye} className='repo-count__icon' />
        <p className='repo-count__num'>{repo.watchers_count}</p>
        <FontAwesomeIcon icon={faCodeFork} className='repo-count__icon' />
        <p className='repo-count__num'>{repo.forks_count}</p>
      </div>
      <Link className='repo-link' href={repo.html_url} target='_blank'>
        View Repository
        <FontAwesomeIcon icon={faChevronRight} className='repo-link__chevron' />
        <FontAwesomeIcon icon={faChevronRight} className='repo-link__chevron' />
      </Link>
    </div>
  );
};
