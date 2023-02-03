import type { NextApiRequest, NextApiResponse } from 'next';

import { Octokit } from '@octokit/core';

const fetchRepositories = async (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    const octokit = new Octokit({ auth: process.env.PERSONAL_ACCESS_TOKEN });
    const repos = await octokit.request(`GET /user/repos`, {
      type: 'public',
      page: 1,
      per_page: 6,
      sort: 'updated',
      direction: 'desc',
    });

    return res.status(200).json({ repos: repos.data });
  } catch (err: unknown) {
    if (err instanceof NextApiError) {
      return res.status(err.statusCode || 500).json({ error: err.message });
    } else {
      return res.status(400).json({ error: 'something went wrong' });
    }
  }
};

export default fetchRepositories;
