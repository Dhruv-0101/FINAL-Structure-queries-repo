const express = require("express");
const authRouter = require("../src/modules/Auth/routes/authRoutes");
const dbConnect = require("../config/dbConnect");
const {
  notFound,
  globalErrhandler,
} = require("../middleware/globalErrhandler");
dbConnect();

const app = express();
//Middlewares

app.use(express.json()); // Add this line to parse JSON bodies

app.use("/api/v1/users", authRouter);
//err middleware
app.use(notFound);
app.use(globalErrhandler);

module.exports = app;
