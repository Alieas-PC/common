const nodemailer = require('nodemailer');
const { getLogger } = require('../log');

const logger = getLogger();

const createTransporter = ({ host, port, user, pass, secure = true }) => {
  // create reusable transporter object using the default SMTP transport
  return nodemailer.createTransport({
    host,
    port,
    secure, // true for 465, false for other ports
    auth: {
      user, // generated ethereal user
      pass // generated ethereal password
    }
  });
};

module.exports = credential => {
  const transporter = createTransporter(credential);

  // send function
  return async ({ from, to, subject, text, html }) => {
    // send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${from}" <${credential.user}>`, // sender address
      to, // list of receivers
      subject, // Subject line
      text, // plain text body
      html // html body
    });

    logger.info('Message sent: %s', info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  };
};
