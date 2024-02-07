const express = require("express");
const authRouter = require("../src/modules/Auth/routes/authRoutes");
const userRouter = require("../src/modules/User/routes/userRoutes");
const dbConnect = require("../config/dbConnect");
const {
  notFound,
  globalErrhandler,
} = require("../middleware/globalErrhandler");
const isLoggedIn = require("../src/modules/Auth/middleware/isLoggedIn");
dbConnect();

const app = express();
//Middlewares

app.use(express.json()); // Add this line to parse JSON bodies

app.use("/api/v1/users", authRouter);
app.use("/api/v1/users", userRouter);

//err middleware
app.use(notFound);
app.use(globalErrhandler);

module.exports = app;
