const { email } = require('../config');
const nodemailer = require('nodemailer');

module.exports = class EmailSender {

  async send() {
    const transporter = nodemailer.createTransport(
      this.transportConfig,
    );
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: this.subject,
      html: this.body,
    };

    return transporter.sendMail(mailOptions);
  }

  get transportConfig() {
    return email.sender;
  }
  get from() {
    return email.sender.from;
  }
  get subject() {
    return email.order_received.subject;
  }
  get body() {
    return email.order_received.body;
  }
  get to() {
    return email.order_received.to;
  }
};
