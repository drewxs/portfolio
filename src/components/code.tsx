import { Endpoints } from '@octokit/types';

import { RepoCard } from '@/components';

type ReposType = Endpoints['GET /user/repos']['response']['data'];

export const Code = ({ repos }: { repos: ReposType }) => {
  return (
    <section className='home section code'>
      <div className='container'>
        <h1>Code</h1>
        <div className='repo-list'>{repos?.map((repo) => <RepoCard repo={repo} key={repo.id} />)}</div>
      </div>
    </section>
  );
};
