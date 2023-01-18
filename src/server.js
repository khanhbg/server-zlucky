import express from "express";
import bodyParser from 'body-parser';
import initWebRoutes from './routes/web.js';
import cookieParser from 'cookie-parser';
import connectD from "./config/connectDB.js";
import dotenv from 'dotenv';
//const Nexmo = require('nexmo');
let app= express()
app.use(cookieParser())

app.use(function (req, res, next) { 
    res.header("Access-Control-Allow-Origin", "https://czolucky.vercel.app"); 
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    
    next();

  })
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get("/", function(req, res) {
    return res.status(200).json({
      code: 1,
      message: "khanhkhanh",
  });
  })
initWebRoutes(app);
connectD();
let port = process.env.PORT || 3000
app.listen(3000, () => {
  console.log(`Example app listening on port`)
})