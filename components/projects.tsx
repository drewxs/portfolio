import { Endpoints } from '@octokit/types';
import { ReactElement } from 'react';

import { RepoCard } from 'components';

type ReposType = Endpoints['GET /user/repos']['response']['data'];

/**
 * Section for showcasing featured projects.
 *
 * @param projects - Array of GitHub repository objects
 */
export const Projects = ({ repos }: { repos: ReposType }): ReactElement => {
  return (
    <section className='home code'>
      <div className='container'>
        <h1>Projects</h1>
        <div className='repo-list'>
          {repos?.map((repo) => {
            return <RepoCard repo={repo} key={repo.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
