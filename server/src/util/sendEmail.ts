// const nodemailer = require('nodemailer');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export async function sendDigitEmail(email: string, digit: number) {
  const msg = {
    to: email,
    from: 'kenichikona@gmail.com',
    subject: 'Slack confirmation',
    text: 'confirmation',
    html: `the number is ${digit}`,
  };

  sgMail.send(msg);
}

export async function sendLinkEmail(email: string, token: string) {
  const msg = {
    to: email,
    from: 'kenichikona@gmail.com',
    subject: email,
    text: 'Slack confirmation',
    html: `<a href='http://localhost:3000/get-started/check/${token}'>http://localhost:3000/get-started/check/${token}</a>`,
  };

  sgMail.send(msg);
}

export async function sendInvitationEmail(
  email: string,
  invitorId: string,
  invitor: string,
  token: string
) {
  const msg = {
    to: email,
    from: 'kenichikona@gmail.com',
    subject: `${invitor} has invited you to a Slack Workspace`,
    text: 'Slack confirmation',
    html: `<a href='http://localhost:3000/get-started/invited/${invitorId}/${token}'>Open Slack</a>`,
  };

  sgMail.send(msg);
}
