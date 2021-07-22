/*------------------Setupe the trasnporter object------------------*/
const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
app.use(express.json());
app.use(cors());

/*------------------Setupe the trasnporter object------------------*/
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL,
    pass: process.env.WORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

/*------------------verify the transporter underneath the created transporter from Nodemailer ------------------*/

transporter.verify((err, success) => {
  err
    ? console.log(err)
    : console.log(`=== Server is ready to take messages: ${success} ===`);
});

/*------------------create a test mailOptions object------------------*/
app.post("/send", function (req, res) {
  let mailOptions = {
    from: process.env.EMAIL,
    to: `${req.body.mailerState.email}`,
    subject: `${req.body.mailerState.subject}`,
    text: `${req.body.mailerState.message}`,
  };

  /*------------------send the mailOptions through a transporter sendMail method------------------*/
  // transporter.sendMail(mailOptions, function (err, data) {
  //   if (err) {
  //     console.log("Errory " + err);
  //   } else {
  //     console.log("Email sent successfully");
  //   }
  // });
  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      res.json({
        status: "fail",
      });
    } else {
      console.log("== Message Sent ==");
      res.json({
        status: "success",
      });
    }
  });
});

/*------------------Specify what port to use------------------*/
const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
