var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function (req, res, next) {
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'akshitdankhra819@gmail.com',
      pass: 'igolmncyqplxbgby'
    }
  });

  var mailOptions = {
    from: 'akshitdankhra819@gmail.com',
    to: 'akshitdankhra05@gmail.com',
    subject: 'Sending Email using Node.js',
    text: 'That was easy!'
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  }); 
  res.render('index');
});

module.exports = router;
