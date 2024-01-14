const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/send-email", function (req, res) {
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "testemailplz123@gmail.com",
      pass: "asdf#123",
    },
  });

  let mailOptions = {
    from: "testemailplz123@gmail.com",
    to: req.body.user_email,
    subject: "Sending Email using Node.js",
    text: req.body.message,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.send("error");
    } else {
      console.log("Email sent: " + info.response);
      res.send("success");
    }
  });
});

app.listen(3000, function () {
  console.log("Server is running at port 3000");
});
