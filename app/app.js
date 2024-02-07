const express = require("express");
const authRouter = require("../src/modules/Auth/routes/authRoutes");
const dbConnect = require("../config/dbConnect");
dbConnect();

const app = express();
//Middlewares

app.use(express.json()); // Add this line to parse JSON bodies

app.use("/api/v1/users", authRouter);

module.exports = app;
