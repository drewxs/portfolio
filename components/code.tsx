import { Endpoints } from '@octokit/types';
import React from 'react';

import { RepoCard } from 'components';

type ReposType = Endpoints['GET /user/repos']['response']['data'];

export const Code = ({ repos }: { repos: ReposType }) => {
  return (
    <section className='code'>
      <div className='container'>
        <h1>Code</h1>
        <div className='repos'>
          {repos?.map((repo) => {
            return <RepoCard repo={repo} key={repo.id} />;
          })}
        </div>
      </div>
    </section>
  );
};
