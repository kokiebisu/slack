import nodemailer from "nodemailer";

export async function sendInvitationEmail(
  email: string,
  invitorId: string,
  invitor: string,
  token: string
) {
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAILSENDER,
        pass: process.env.MAILPASS,
      },
    });
    transporter.sendMail({
      from: process.env.MAILSENDER,
      to: email,
      subject: `${invitor} has invited you to a Slack Workspace`,
      html: `<a href='http://${process.env.ORIGIN}/get-started/invited/${invitorId}/${token}'>Open Slack</a>`,
    });
  } catch (err) {
    console.log("ERR ", err);
  }
}

export async function sendLinkEmail(email: string, token: string) {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
      user: process.env.MAILSENDER,
      pass: process.env.MAILPASS,
    },
  });

  transporter.sendMail({
    from: process.env.MAILSENDER,
    to: email,
    subject: "Slack confirmation",
    html: `<a href='http://${process.env.ORIGIN}/get-started/check/${token}'>http://localhost:3000/get-started/check/${token}</a>`,
  });
}

export async function sendDigitEmail(email: string, digit: number) {
  console.log("user", process.env.MAILSENDER);
  console.log("pass", process.env.MAILPASS);
  console.log("email", email);
  console.log("digit", digit);
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      auth: {
        user: process.env.MAILSENDER,
        pass: process.env.MAILPASS,
      },
    });

    transporter.sendMail({
      from: process.env.MAILSENDER,
      to: email,
      subject: "Slack confirmation",
      html: `the number is ${digit}`,
    });
  } catch (err) {
    console.log("ERR ", err);
  }
}
