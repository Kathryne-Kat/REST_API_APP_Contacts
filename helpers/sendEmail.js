const sgMail = require("@sendgrid/mail");

const { SENDGRID_API_KEY } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  const email = { ...data, from: "katykov@i.ua" };
  await sgMail.send(email);
  return true;
};

module.exports = sendEmail;

// const email = {
//   to: "pajef79233@fitzola.com",
//   from: "katykov@i.ua",
//   subject: "Test email",
//   html: "<p><strong>Test email</strong>from localhost:3000</p>",
// };

// sgMail
//   .send(email)
//   .then(() => console.log("Email send success"))
//   .catch((error) => console.error(error.massage));
