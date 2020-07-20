const nodemailer = require('nodemailer');

export async function sendDigitEmail(email: string, digit: number) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: 'kokoaj.saas@gmail.com',
      pass: 'kronos111',
    },
  });

  transporter.sendMail({
    from: 'kokoaj.saas@gmail.com',
    to: email,
    subject: 'Slack confirmation',
    html: `the number is ${digit}`,
  });
}

export async function sendLinkEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: 'kokoaj.saas@gmail.com',
      pass: 'kronos111',
    },
  });

  transporter.sendMail({
    from: 'kokoaj.saas@gmail.com',
    to: email,
    subject: 'Slack confirmation',
    html: `<a href='http://localhost:3000/get-started/check/${token}'>http://localhost:3000/get-started/check/${token}</a>`,
  });
}

export async function sendInvitationEmail(
  email: string,
  invitorId: string,
  invitor: string,
  token: string
) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    auth: {
      user: 'kokoaj.saas@gmail.com',
      pass: 'kronos111',
    },
  });
  transporter.sendMail({
    from: 'kokoaj.saas@gmail.com',
    to: email,
    subject: `${invitor} has invited you to a Slack Workspace`,
    html: `<a href='http://localhost:3000/get-started/invited/${invitorId}/${token}'>Open Slack</a>`,
  });
}
