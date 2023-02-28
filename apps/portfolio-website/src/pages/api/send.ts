import type { NextApiRequest, NextApiResponse } from 'next';
import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY!)


type EmailBodyType = {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}

const sendEmail = async (req: NextApiRequest, res: NextApiResponse,) => {
  if (req.method === 'POST') {
    const { fullname, email, subject, message }: EmailBodyType = req.body;
    try {
      await sendgrid.send({
        to: "rashikashaw97@gmail.com", // Your email where you'll receive emails
        from: "rashikashaw97@gmail.com", // your website email address here
        subject: `${subject}`,
        html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
        <html lang="en">
        <head>
          <meta charset="utf-8">
        
          <title>The HTML5 Herald</title>
          <meta name="description" content="The HTML5 Herald">
          <meta name="author" content="SitePoint">
        <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
        
          <link rel="stylesheet" href="css/styles.css?v=1.0">
        
        </head>
        
        <body>
            <div class="container" style="margin-left: 20px;margin-right: 20px;">
              <h3>You've got a new mail from ${fullname}, their email is: ✉️${email} </h3>
              <div style="font-size: 16px;">
                <p>Message:</p>
                <p>${message}</p>
                <br>
              </div>
            </div>
        </body>
        </html>`,
      });
      res.status(200).json({});
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Internal server error';
        res.status(500).json({ statusCode: 500, message: errorMessage });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
export default sendEmail;