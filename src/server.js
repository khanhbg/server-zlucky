import express from "express";
import bodyParser from 'body-parser';
import initWebRoutes from './routes/web.js';
//import cookieParser from 'cookie-parser';
//import connectD from "./config/connectDB.js";
//import dotenv from 'dotenv';
//const Nexmo = require('nexmo');
let app= express()
//app.use(cookieParser())
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "http://localhost:4200");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Credentials", "true")
//     next();
//   })
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());
app.get("/", function(req, res) {
    let fromPhone = "+84962629794";
        res.send(fromPhone);
  })

// const nexmo = new Nexmo({
//   //Don't forget to add your keys to the .env file! See .env.example for more info
//   apiKey: process.env.API_KEY,
//   apiSecret: process.env.API_SECRET
// });

// app.post('/check', (req, res) => {
//   //To verify the phone number the the request ID and code is required.
//   let code = req.body.code;
//   let requestId = req.body.request_id;
  
//   console.log("Code: " + code + " Request ID: " + requestId);
  
//   nexmo.verify.check({request_id: requestId, code: code}, (err, result) => {
//     if(err) {
//       console.log(err);
      
//       //Oops! Something went wrong, respond with 500: Server Error
//       res.status(500).send({error_text: err.message});
//     } else {
//       console.log(result)
      
//       if(result && result.status == '0') {
//         //A status of 0 means success! Respond with 200: OK
//         res.status(200).send(result);
//         console.log('Account verified!');
//       } else {
//         //A status other than 0 means that something is wrong with the request. Respond with 400: Bad Request
//         //The rest of the status values can be found here: https://developer.nexmo.com/api/verify#status-values
//         res.status(400).send(result);
//         console.log('Error verifying account');
//       }
//     }
//   });
// });
// app.post('/request', (req, res) => {
//   // A user registers with a mobile phone number
//   let phoneNumber = req.body.number;
  
//   console.log(phoneNumber);
  
//   nexmo.verify.request({number: phoneNumber, brand: 'Awesome Company'}, (err, result) => {
//     if(err) {
//       console.log(err);
      
//       //Oops! Something went wrong, respond with 500: Server Error
//       res.status(500).send({error_text: err.message});
//     } else {
//       console.log(result);
      
//       if(result && result.status == '0') {
//         //A status of 0 means success! Respond with 200: OK
//         res.status(200).send(result);
//       } else {
//         //A status other than 0 means that something is wrong with the request. Respond with 400: Bad Request
//         //The rest of the status values can be found here: https://developer.nexmo.com/api/verify#status-values
//         res.status(400).send(result);
//       }
//     }
//   });
// });
// app.post("/sendsms", function(req, res) {
//   let fromPhone = "+84962629794";
//   let toPhone = "+84962904602";
//   let content = "ma xac thuc cua ban la 0087";
//   sendSMS(fromPhone, toPhone, content, function(responseData){
//       console.log(responseData);
//   });
// })

// function sendSMS(fromPhone, toPhone, content, callback){
//   nexmo.message.sendSms(fromPhone, toPhone, content, {
//       type: "unicode"
//     }, (err, responseData) => {
//       if (err) {
//         console.log(err);
//       } else {
//         if (responseData.messages[0]['status'] === "0") {
//           callback("Message sent successfully.")
//         } else {
//           callback(`Message failed with error: ${responseData.messages[0]['error-text']}`);
//         }
//       }
//     })
// }

//initWebRoutes(app);
//connectD();
//console.log(Math.random())
//let port = process.env.PORT || 3000
app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`)
})