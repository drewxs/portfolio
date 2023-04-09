import sendgrid from '@sendgrid/mail';
import type { NextApiRequest, NextApiResponse } from 'next';

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
if (SENDGRID_API_KEY) sendgrid.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (process.env.SENDGRID_FROM) {
      await sendgrid.send({
        to: process.env.SENDGRID_TO,
        from: process.env.SENDGRID_FROM,
        subject: `AXS - ${req.body.name}`,
        html: `
          <p>from: ${req.body.email}</p>
          <p>${req.body.message}</p>
        `,
      });
    }
  } catch (err: unknown) {
    if (err instanceof NextApiError) {
      return res.status(err.statusCode || 500).json({ error: err.message });
    } else {
      return res.status(400).json({ error: 'something went wrong' });
    }
  }

  return res.status(200).json({ error: '' });
};

export default sendEmail;
