const express = require("express");
const app = express();
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const cors = require('cors');

const userRoute = require("./Routes/user");

app.use(awsServerlessExpressMiddleware.eventContext());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(awsServerlessExpressMiddleware.eventContext());
app.use(cors());

app.use("/api/v1",userRoute);

module.exports = app;