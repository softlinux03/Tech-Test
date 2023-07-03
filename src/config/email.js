const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const myOAuth2Client = new OAuth2("", "",)
myOAuth2Client.setCredentials({ refresh_token: "" });
const myAccessToken = myOAuth2Client.getAccessToken()


module.exports = {
  sender: {
    from: '',
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: "",
      clientId: "",
      clientSecret: "",
      refreshToken: "",
      accessToken: myAccessToken
    }
  },
  order_received: {
    to: process.env.EMAIL_NOTIFICATION,
    subject: "You've Received a new Order!",
    body: `
      <p>Hello,</p>
      <p>You've received a new Order.</p>
      <p>Thanks,</p>
      <p>Tech Test :)</p>
    `,
  },

};