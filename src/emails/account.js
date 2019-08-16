const sgMail = require("@sendgrid/mail")
const sendgridAPIKey =
  "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";

sgMail.setApiKey(sendgridAPIKey);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'canrozanes@gmail.com',
    subject: 'Welcome to our humble App',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app`
  })
}

module.exports = {
  sendWelcomeEmail,
}
