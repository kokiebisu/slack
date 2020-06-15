const nodemailer = require('nodemailer');

export async function sendDigitEmail(email: string, digit: number) {
  // const testAccount = await nodemailer.createTestAccount();
  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: 'kenichikona@gmail.com',
      pass: 'kronos111',
    },
  });

  // send mail with defined transport object
  transporter.sendMail({
    from: 'kenichikona@gmail.com', // sender address
    to: email, // list of receivers
    subject: 'Slack confirmation', // Subject line
    // html: `<p>Press the confirmation code in order to create a new workspace</p><a href="${url}">Confirm email address</a>`, // html body
    html: `the number is ${digit}`,
  });
}

export async function sendLinkEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: 'kenichikona@gmail.com',
      pass: 'kronos111',
    },
  });

  transporter.sendMail({
    from: 'kenichikona@gmail.com', // sender address
    to: email, // list of receivers
    subject: 'Slack confirmation', // Subject line
    // html: `<p>Press the confirmation code in order to create a new workspace</p><a href="${url}">Confirm email address</a>`, // html body
    html: `<a href='http://localhost:3000/get-started/check/${token}'>http://localhost:3000/your-workspaces/${token}</a>`,
  });
}
