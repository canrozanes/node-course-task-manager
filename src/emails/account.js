const sgMail = require("@sendgrid/mail")
const sendgridAPIKey =
  "";

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
