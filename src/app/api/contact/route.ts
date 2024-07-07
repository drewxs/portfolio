import sendgrid from "@sendgrid/mail";

type Body = { name: string; email: string; message: string };

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export const POST = async (req: Request) => {
  if (!process.env.SENDGRID_FROM) {
    throw new Error("SENDGRID_FROM not set");
  }
  if (!process.env.SENDGRID_TO) {
    throw new Error("SENDGRID_TO not set");
  }

  try {
    const body: Body = await req.json();

    await sendgrid.send({
      to: process.env.SENDGRID_TO,
      from: process.env.SENDGRID_FROM,
      subject: `AXS - ${body.name}`,
      html: `
          <p>from: ${body.email}</p>
          <p>${body.message}</p>
        `,
    });

    return Response.json({ message: "success" });
  } catch (error) {
    return Response.json({ error: error.message });
  }
};
