const nodemailer = require('nodemailer');

export async function sendEmail(email: string, digit: number) {
  const testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: testAccount.user, // generated ethereal user
      pass: testAccount.pass, // generated ethereal password
    },
  });

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Slack 👻" <slack@example.com>', // sender address
    to: email, // list of receivers
    subject: 'Slack confirmation', // Subject line
    // html: `<p>Press the confirmation code in order to create a new workspace</p><a href="${url}">Confirm email address</a>`, // html body
    html: `the number is ${digit}`,
  });

  console.log('Message sent: %s', info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
