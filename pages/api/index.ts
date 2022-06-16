import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  data: {};
};

const handler = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  res.status(200).json({ data: {} });
};

export default handler;
