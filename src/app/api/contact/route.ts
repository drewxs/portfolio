import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

type Body = { name: string; email: string; message: string };

export default async function POST(req: Request) {
  const body: Body = await req.json();

  try {
    if (process.env.SENDGRID_FROM) {
      await sendgrid.send({
        to: process.env.SENDGRID_TO,
        from: process.env.SENDGRID_FROM,
        subject: `AXS - ${body.name}`,
        html: `
          <p>from: ${body.email}</p>
          <p>${body.message}</p>
        `,
      });
    }
  } catch (error) {
    return Response.json({ error: error.message });
  }

  return Response.json({ error: '' });
}
